import { useState } from "react";
import { Outlet, useMatch, useNavigate } from "react-router-dom";
import QuestionPaperCard from "@/components/QuestionPaperCard.jsx";
import { cn } from "@/lib/utils.js";

// Sample Fill in the Blanks Data





// CATEGORY MAP
export const fillBlankCategories = {
    coding: { id: "coding", title: "Ability to Code", papers: codingFillBlanks },
    language: { id: "language", title: "Language Reasoning", papers: languageFillBlanks },
    reasoning: { id: "reasoning", title: "Analytical Reasoning", papers: reasoningFillBlanks },
    aptitude: { id: "aptitude", title: "Aptitude", papers: aptitudeFillBlanks }
};

export default function CeeExamFillBlanks() {
    const [activeCategory, setActiveCategory] = useState("coding");
    const navigate = useNavigate();
    const isPaperRoute = useMatch("/cee/exam/fill-in-the-blanks/:paperId");

    const handlePaperClick = (paper) => {
        navigate(`/cee/exam/fill-in-the-blanks/${paper.id}`);
    };

    if (isPaperRoute) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
                <Outlet />
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
            {/* Category Tabs */}
            <div className="flex justify-center mb-10 overflow-x-auto">
                <div className="bg-zinc-800 rounded-full p-1 inline-flex shadow-inner">
                    {Object.values(fillBlankCategories).map((category, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveCategory(category.id)}
                            className={cn(
                                "px-4 sm:px-6 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-300",
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
            {/*<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">*/}
            {/*    {fillBlankCategories[activeCategory].papers.map((paper, idx) => (*/}
            {/*        <QuestionPaperCard*/}
            {/*            key={idx}*/}
            {/*            paper={paper}*/}
            {/*            onClick={() => handlePaperClick(paper)}*/}
            {/*        />*/}
            {/*    ))}*/}
            {/*</div>*/}
            <ComingSoon />
        </div>
    );
}
