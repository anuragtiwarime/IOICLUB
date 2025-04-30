import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { categories } from "./CeeExamMCQs";

export default function QuestionView() {
    const { paperId } = useParams();
    const [paper, setPaper] = useState(null);
    const [category, setCategory] = useState(null);
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        for (const cat of Object.values(categories)) {
            const foundPaper = cat.papers.find(p => p.id === paperId);
            if (foundPaper) {
                setPaper(foundPaper);
                setCategory(cat);
                break;
            }
        }
    }, [paperId]);

    const handleAnswerSelect = (questionId, selectedOption) => {
        if (submitted) return;
        setAnswers(prev => ({
            ...prev,
            [questionId]: selectedOption
        }));
    };

    const handleSubmit = () => {
        if (submitted) return;
        let correctCount = 0;
        paper.questions.forEach(q => {
            if (answers[q.id] === q.answer) correctCount++;
        });
        setScore(correctCount);
        setSubmitted(true);
    };

    const getScenarioForQuestion = (question) => {
        if (!paper || !paper.scenarios) return null;
        if (question.scenarioRef) {
            return paper.scenarios.find(s => s.id === question.scenarioRef);
        }
        return null;
    };
    
    // Format scenario description with better line breaks
    const formatScenarioDescription = (description) => {
        // Replace specific patterns with line breaks
        let formatted = description;
        
        // Add line breaks after each numbered step or section
        formatted = formatted.replace(/(\d+\. .*?)(?=\d+\. |$)/g, '$1\n\n');
        
        // Add line breaks after sentences that end paragraph contexts
        formatted = formatted.replace(/(Initial State:)/g, '\n$1\n');
        formatted = formatted.replace(/(Sequence of Operations:)/g, '\n$1\n');
        formatted = formatted.replace(/(Operations:)/g, '\n$1\n');
        
        return formatted;
    };

    // Display the question number or ID appropriately
    const getQuestionLabel = (question, index) => {
        // If the question has a custom ID (like 4.1, 4.2, etc.), use that
        if (typeof question.id === 'string' && question.id.includes('.')) {
            return question.id;
        }
        // Otherwise use the numeric index + 1
        return index + 1;
    };

    if (!paper) return <div className="text-center py-10">Loading...</div>;

    return (
        <div className="bg-zinc-900 rounded-lg shadow-xl p-6">
             <div className="mb-6">
            <button
                onClick={() => window.history.back()}
                className="text-sm text-blue-400 hover:text-blue-200 transition-colors"
            >
                ← Back to Papers
            </button>
        </div>
            <h2 className="text-2xl font-bold text-white mb-6">{paper.title} - {category?.title}</h2>

            {submitted ? (
                <div className="bg-blue-900/30 border border-blue-500 rounded-lg p-4 mb-8">
                    <h3 className="text-xl font-semibold text-white">
                        Your Score: {score} / {paper.questions.length}
                    </h3>
                    <p className="text-blue-200 mt-2">
                        You got {score} out of {paper.questions.length} questions correct.
                    </p>
                </div>
            ) : (
                <p className="text-zinc-400 mb-8">
                    Total Questions: {paper.questions.length}
                </p>
            )}

            <div className="space-y-12">
                {paper.questions.map((question, index) => {
                    const scenario = getScenarioForQuestion(question);
                    const showScenario = scenario &&
                        (index === 0 || paper.questions[index - 1].scenarioRef !== question.scenarioRef);

                    return (
                        <div key={question.id} className="pb-6 border-b border-zinc-800">
                            
                            {/* Scenario Block */}
                            {showScenario && (
                                <div className="mb-6 bg-zinc-800/50 border border-zinc-700 rounded-lg p-4">
                                    <h3 className="text-lg font-semibold text-blue-400 mb-2">
                                        {scenario.title}
                                    </h3>
                                    <div className="text-zinc-300 text-sm whitespace-pre-line leading-relaxed">
                                        {formatScenarioDescription(scenario.description)}
                                    </div>
                                </div>
                            )}

                            {/* Question */}
                            <div className="mb-4">
                                <h4 className="text-lg font-medium text-white">
                                    {getQuestionLabel(question, index)}. {question.question}
                                </h4>
                            </div>

                            {/* Options */}
                            <div className="space-y-3 mt-4">
                                {question.options.map((option, idx) => {
                                    const isSelected = answers[question.id] === option;
                                    const isCorrect = submitted && option === question.answer;
                                    const isWrong = submitted && isSelected && option !== question.answer;

                                    return (
                                        <div 
                                            key={idx}
                                            onClick={() => handleAnswerSelect(question.id, option)}
                                            className={`
                                                p-3 rounded-lg cursor-pointer transition-all
                                                ${!submitted ? 'hover:bg-zinc-700/50' : ''}
                                                ${isSelected && !submitted ? 'bg-blue-900/40 border border-blue-500' : ''}
                                                ${isCorrect ? 'bg-green-900/30 border border-green-500' : ''}
                                                ${isWrong ? 'bg-red-900/30 border border-red-500' : ''}
                                                ${!isSelected && !isCorrect ? 'bg-zinc-800/40 border border-zinc-700' : ''}
                                            `}
                                        >
                                            <div className="flex items-center">
                                                <div className={`
                                                    w-6 h-6 rounded-full flex items-center justify-center mr-3
                                                    ${isSelected && !submitted ? 'bg-blue-500 text-white' : ''}
                                                    ${isCorrect ? 'bg-green-500 text-white' : ''}
                                                    ${isWrong ? 'bg-red-500 text-white' : ''}
                                                    ${!isSelected && !isCorrect ? 'bg-zinc-700 text-zinc-300' : ''}
                                                `}>
                                                    {String.fromCharCode(65 + idx)}
                                                </div>
                                                <span className={`
                                                    ${isSelected && !submitted ? 'text-blue-100' : ''}
                                                    ${isCorrect ? 'text-green-100' : ''}
                                                    ${isWrong ? 'text-red-100' : ''}
                                                    ${!isSelected && !isCorrect ? 'text-zinc-300' : ''}
                                                `}>
                                                    {option}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>

            {!submitted && (
                <div className="mt-10 flex justify-center">
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-blue-900/40"
                    >
                        Submit Answers
                    </button>
                </div>
            )}
        </div>
    );
}