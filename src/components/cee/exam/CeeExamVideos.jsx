import React, { useState } from 'react';
import VideoCard from "@/components/VideoCard.jsx";
import { cn } from "@/lib/utils.js";

export default function CeeExamVideos() {
    const [activeCategory, setActiveCategory] = useState('coding');

    const categories = {
        coding: {
            id: 'coding',
            title: 'Ability to Code',
            videos: [
                { id: 'rJN8CaDr8vk', title: 'All About CEE | Crack Coding Aptitude 🔥| Live With Ali Sir', author: 'PW Institute of Innovation' },
            ]
        },
        language: {
            id: 'language',
            title: 'Language Reasoning',
            videos: [
                { id: 'L2dQH0LUn0E', title: 'All About CEE | Crack English Comprehension 🔥 | Live With Kinjal Ma\'am', author: 'PW Institute of Innovation' },
            ]
        },
        analytical: {
            id: 'analytical',
            title: 'Analytical Reasoning',
            videos: [
                { id: 'y3JuTcjdNWA', title: 'All About CEE | Crack CEE Reasoning & Aptitude 🔥 | Live With Saurabh Sir', author: 'PW Institute of Innovation' },
            ]
        },
        aptitude: {
            id: 'aptitude',
            title: 'Aptitude',
            videos: [
                { id: 'y3JuTcjdNWA', title: 'All About CEE | Crack CEE Reasoning & Aptitude 🔥 | Live With Saurabh Sir', author: 'PW Institute of Innovation' },
            ]
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Category Tabs */}
            <div className="flex justify-center mb-8">
                <div className="bg-zinc-800 rounded-full p-1 inline-flex shadow-inner overflow-x-auto max-w-full scrollbar-hide space-x-2">
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

            {/* Video Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categories[activeCategory].videos.map((video, idx) => (
                    <VideoCard video={video} key={idx} />
                ))}
            </div>
        </div>
    );
}
