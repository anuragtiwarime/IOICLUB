import {useState} from "react";
import {Outlet, useMatch, useNavigate} from "react-router-dom";
import QuestionPaperCard from "@/components/QuestionPaperCard.jsx";
import {cn} from "@/lib/utils.js";
import abilityToCode from "@/data/abilityToCode.json";
import languageReasoning from "@/data/languageReasoning.json";
import analyticalReasoning from "@/data/analyticalReasoning.json";
import aptitude from "@/data/aptitude.json";





export const categories = {
    coding: {id: "coding", title: "Ability to Code", papers: abilityToCode},
    language: {id: "language", title: "Language Reasoning", papers: languageReasoning},
    reasoning: {id: "reasoning", title: "Analytical Reasoning", papers: analyticalReasoning},
    aptitude: {id: "aptitude", title: "Aptitude", papers: aptitude},
};

export default function CeeExamMCQs() {
    const [activeCategory, setActiveCategory] = useState("coding");
    const navigate = useNavigate();
    const isPaperRoute = useMatch("/cee/exam/mcqs/:paperId");

    const handlePaperClick = (paper) => {
        navigate(`/cee/exam/mcqs/${paper.id}`);
    };

    // Paper Route View
    if (isPaperRoute) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 max-h-[75vh] overflow-y-auto">
                <Outlet/>
            </div>
        );
    }

    // Default View
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Category Tabs */}
            <div className="flex justify-center mb-8">
                <div
                    className="bg-zinc-800 rounded-full p-1 inline-flex shadow-inner overflow-x-auto max-w-full scrollbar-hide space-x-2">
                    {Object.values(categories).map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={cn(
                                "whitespace-nowrap px-4 sm:px-6 py-2 text-sm font-medium rounded-full transition-all duration-300",
                                activeCategory === category.id
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "text-zinc-400 hover:text-white hover:bg-zinc-700"
                            )}
                        >
                            {category.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* Question Papers Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories[activeCategory].papers.map((paper, idx) => (
                    <QuestionPaperCard
                        key={idx}
                        paper={paper}
                        onClick={() => handlePaperClick(paper)}
                        className="w-full max-w-xs mx-auto" // Added responsiveness to card size
                    />
                ))}
            </div>
        </div>
    );
}