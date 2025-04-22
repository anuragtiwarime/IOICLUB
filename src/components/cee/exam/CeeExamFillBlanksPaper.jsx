import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cn } from "@/lib/utils.js";
import { fillBlankCategories } from "@/components/cee/exam/CeeExamFillBlanks.jsx";

export default function CeeExamFillBlanksPaper() {
    const navigate = useNavigate();
    const { paperId } = useParams();

    const paper = Object.values(fillBlankCategories)
        .flatMap((cat) => cat.papers)
        .find((p) => p.id === paperId);

    const [answers, setAnswers] = useState({});
    const [results, setResults] = useState(null);
    const [validationErrors, setValidationErrors] = useState({});

    if (!paper) {
        return <div className="text-red-500">Paper not found.</div>;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (validationErrors[name] && value.trim() !== "") {
            setValidationErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
        setAnswers((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        paper.questions.forEach((q) => {
            const key = `q${q.id}`;
            const value = answers[key]?.trim();
            if (!value) {
                newErrors[key] = "This field is required.";
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setValidationErrors(newErrors);
            return;
        }

        setValidationErrors({});
        let correctCount = 0;
        const feedback = paper.questions.map((q) => {
            const userAnswer = answers[`q${q.id}`]?.trim().toLowerCase() || "";
            const isCorrect = userAnswer === q.answer.trim().toLowerCase();
            if (isCorrect) correctCount++;
            return {
                question: q.question,
                userAnswer,
                correctAnswer: q.answer,
                isCorrect,
            };
        });

        setResults({
            correctCount,
            total: paper.questions.length,
            feedback,
        });
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-2xl font-bold text-white">{paper.title}</h2>
                <button
                    onClick={() => navigate(-1)}
                    className="text-sm text-neutral-400 hover:text-white border border-neutral-700 px-4 py-2 rounded"
                >
                    ← Back
                </button>
            </div>

            {!results ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                    {paper.questions.map((q, index) => {
                        const key = `q${q.id}`;
                        const hasError = validationErrors[key];

                        return (
                            <div key={q.id}>
                                <label className="block mb-2 font-medium text-white">
                                    {index + 1}. {q.question.replace("____", "_____")}
                                </label>
                                <input
                                    type="text"
                                    name={key}
                                    value={answers[key] || ""}
                                    onChange={handleInputChange}
                                    className={cn(
                                        "w-full px-4 py-2 rounded bg-neutral-800 text-white border transition-colors duration-200",
                                        hasError
                                            ? "border-red-600 focus:outline-red-500"
                                            : "border-neutral-700 focus:border-blue-600"
                                    )}
                                />
                                {hasError && (
                                    <p className="text-sm text-red-400 mt-1">
                                        {validationErrors[key]}
                                    </p>
                                )}
                            </div>
                        );
                    })}

                    <button
                        type="submit"
                        className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
                    >
                        Submit Answers
                    </button>
                </form>
            ) : (
                <div className="space-y-4">
                    <p className="text-lg font-semibold text-green-400">
                        You got {results.correctCount} out of {results.total} correct!
                    </p>

                    {results.feedback.map((item, index) => (
                        <div
                            key={index}
                            className={cn(
                                "border rounded-xl p-4 space-y-1",
                                item.isCorrect
                                    ? "border-green-600 bg-green-900/20"
                                    : "border-red-600 bg-red-900/20"
                            )}
                        >
                            <p className="font-medium text-white">
                                {index + 1}. {item.question.replace("____", "_____")}
                            </p>
                            <p className="text-sm text-neutral-300">
                                Your answer:{" "}
                                <span
                                    className={
                                        item.isCorrect ? "text-green-400" : "text-red-400"
                                    }
                                >
                                    {item.userAnswer}
                                </span>
                            </p>
                            {!item.isCorrect && (
                                <p className="text-sm text-neutral-400">
                                    Correct answer:{" "}
                                    <span className="text-green-300">{item.correctAnswer}</span>
                                </p>
                            )}
                        </div>
                    ))}

                    <button
                        onClick={() => navigate(-1)}
                        className="w-full sm:w-auto mt-6 px-6 py-2 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition"
                    >
                        Try Another Paper
                    </button>
                </div>
            )}
        </div>
    );
}
