import { useState } from "react";
import { Outlet, useMatch, useNavigate } from "react-router-dom";
import QuestionPaperCard from "@/components/QuestionPaperCard.jsx";
import { cn } from "@/lib/utils.js";

// Modifying the structure to ensure scenarios are properly grouped and visible
const abilityToCode = [
    {
        title: "Paper 1",
        id: "coding-paper-1",
        questions: [
            {
                id: 1,
                question: "Which keyword declares a block-scoped variable in JavaScript?",
                options: ["var", "let", "const", "function"],
                answer: "let"
            },
            {
                id: 2,
                question: "What is the output of typeof null in JavaScript?",
                options: ["object", "null", "undefined", "string"],
                answer: "object"
            },
            {
                id: 3,
                question: "What does DOM stand for?",
                options: [
                    "Document Object Model",
                    "Data Object Map",
                    "Document Oriented Model",
                    "Data Output Method"
                ],
                answer: "Document Object Model"
            }
        ]
    },
    {
        title: "Paper 2",
        id: "coding-paper-2",
        questions: [
            {
                id: 1,
                question: "Which of the following is not a JavaScript data type?",
                options: ["Boolean", "Undefined", "Float", "String"],
                answer: "Float"
            },
            {
                id: 2,
                question: "Which method converts JSON text to a JavaScript object?",
                options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.decode()"],
                answer: "JSON.parse()"
            },
            {
                id: 3,
                question: "How do you create a function in JavaScript?",
                options: [
                    "function myFunc()",
                    "def myFunc()",
                    "func myFunc()",
                    "create function myFunc()"
                ],
                answer: "function myFunc()"
            }
        ]
    }
];
const languageReasoning = [
    {
        title: "Paper 1",
        id: "language-paper-1",
        scenarios: [
            {
                id: "statement-1",
                title: "9. Statement:",
                description: "Some cats are animals. All animals have eyes."
            }
        ],
        questions: [
            {
                id: 1,
                question: "Ravi ___ to school every day.",
                options: ["go", "goes", "gone", "going"],
                answer: "goes"
            },
            {
                id: 2,
                question: "Choose the synonym for 'generous':",
                options: ["Stingy", "Kind", "Mean", "Rude"],
                answer: "Kind"
            },
            {
                id: 3,
                question: "Identify the error:\n“She have completed the task.”",
                options: ["She", "have", "completed", "the"],
                answer: "have"
            },
            {
                id: 4,
                question: "Fill in the blank: “He is good ___ maths.”",
                options: ["on", "in", "at", "by"],
                answer: "at"
            },
            {
                id: 5,
                question: "Which is a cause and effect pair?",
                options: [
                    "It rained – the match was cancelled",
                    "He is tall – he eats rice",
                    "She sings – she dances",
                    "They won – they cried"
                ],
                answer: "It rained – the match was cancelled"
            },
            {
                id: 6,
                question: "Which best describes the mood?",
                options: ["Sad", "Tense", "Joyful", "Angry"],
                answer: "Joyful"
            },
            {
                id: 7,
                question: "Odd one out:",
                options: ["Knife", "Fork", "Spoon", "Plate"],
                answer: "Plate"
            },
            {
                id: 8,
                question: "Teacher: Classroom :: Doctor : ?",
                options: ["Medicine", "Nurse", "Hospital", "Patient"],
                answer: "Hospital"
            },
            {
                id: "9.1",
                scenarioRef: "statement-1",
                question: "Conclusion:",
                options: [
                    "All cats have eyes",
                    "Some animals are cats",
                    "Both A and B",
                    "None"
                ],
                answer: "Both A and B"
            },
            {
                id: 10,
                question: "Correct sentence:",
                options: ["They was running", "He are happy", "I am going", "She were dancing"],
                answer: "I am going"
            },
            {
                id: 11,
                question: "Synonym of “brief”:",
                options: ["Long", "Short", "Deep", "Vast"],
                answer: "Short"
            },
            {
                id: 12,
                question: "Choose correct analogy: Book is to Reading as Fork is to:",
                options: ["Drawing", "Eating", "Stirring", "Cooking"],
                answer: "Eating"
            }
        ]
    },
    {
        title: "Paper 2",
        id: "language-paper-2",
        scenarios: [
            {
                id: "stack-operations",
                title: "4. Scenario 1: Stack Operations",
                description: "You are simulating a browser with tabs. The browser maintains a stack of pages where each new page is opened on top. You can: Open a new page (push to stack), Close current tab (pop from stack), View current tab (peek top), Check if browser is empty. Initial State: Stack is empty. Sequence of Operations: 1. Open 'Home', 2. Open 'Profile', 3. Open 'Settings', 4. View current tab, 5. Close current tab, 6. Open 'Help', 7. Close current tab, 8. Close current tab, 9. View current tab"
            },
            {
                id: "queue-simulation",
                title: "5. Scenario 2: Queue Simulation",
                description: "You are managing a print queue. The printer prints in FIFO order. Users A, B, C, D, and E send print jobs. Operations: 1. A sends a job, 2. B sends a job, 3. Print a job, 4. C sends a job, 5. D sends a job, 6. Print a job, 7. E sends a job, 8. Print a job"
            },
            {
                id: "array-manipulation",
                title: "6. Scenario 3: Array Manipulation",
                description: "You are managing a 1D array of size 6. Initialize with zeros. Operations: 1. Set arr[2] = 9, 2. Set arr[5] = arr[2] + 1, 3. Set arr[0] = arr[5] - 3, 4. Set arr[1] = arr[0] + arr[2], 5. Set arr[4] = arr[1] - arr[5], 6. Print arr"
            },
            {
                id: "linked-list",
                title: "7. Scenario 4: Linked List Modification",
                description: "You're managing a singly linked list with operations: Add at head, Add after a specific node, Delete a node by value, Traverse list. Operations: 1. Add 50 at head, 2. Add 30 at head, 3. Add 40 after 30, 4. Add 60 after 50, 5. Delete 30, 6. Traverse the list (Head to Tail)"
            }
        ],
        questions: [
            {
                id: 1,
                question: "Select the synonym of 'brilliant':",
                options: ["Dull", "Smart", "Intelligent", "Bright"],
                answer: "Bright"
            },
            {
                id: 2,
                question: "What is the feminine form of 'actor'?",
                options: ["Actoress", "Actress", "Actorine", "Actara"],
                answer: "Actress"
            },
            {
                id: 3,
                question: "Which of the following is a conjunction?",
                options: ["Run", "Beautiful", "And", "Happy"],
                answer: "And"
            },
            {
                id: "4.1",
                scenarioRef: "stack-operations",
                question: "What page is currently open after step 4?",
                options: ["Home", "Profile", "Settings", "Help"],
                answer: "Settings"
            },
            {
                id: "4.2",
                scenarioRef: "stack-operations",
                question: "What page is on top after step 9?",
                options: ["Home", "Profile", "Help", "Empty"],
                answer: "Home"
            },
            {
                id: "4.3",
                scenarioRef: "stack-operations",
                question: "What is the stack content after all 9 steps (bottom to top)?",
                options: ["[Home]", "[Home, Profile]", "[Profile]", "[]"],
                answer: "[Home]"
            },
            {
                id: "5.1",
                scenarioRef: "queue-simulation",
                question: "Whose job was printed second?",
                options: ["A", "B", "C", "D"],
                answer: "B"
            },
            {
                id: "5.2",
                scenarioRef: "queue-simulation",
                question: "Whose jobs are still in the queue?",
                options: ["D and E", "C, D, E", "B, C", "C, E"],
                answer: "D and E"
            },
            {
                id: "5.3",
                scenarioRef: "queue-simulation",
                question: "What is the order of the remaining jobs?",
                options: ["D, E", "E, D", "C, D", "E, C"],
                answer: "D, E"
            },
            {
                id: "6.1",
                scenarioRef: "array-manipulation",
                question: "What is the value at index 5?",
                options: ["10", "9", "12", "11"],
                answer: "10"
            },
            {
                id: "6.2",
                scenarioRef: "array-manipulation",
                question: "What is the final value of arr[1]?",
                options: ["9", "15", "13", "17"],
                answer: "16"
            },
            {
                id: "6.3",
                scenarioRef: "array-manipulation",
                question: "What is the array after step 6?",
                options: ["[7, 16, 9, 0, 6, 10]", "[6, 15, 9, 0, 5, 10]", "[7, 16, 9, 0, 6, 11]", "[7, 15, 9, 0, 5, 10]"],
                answer: "[7, 16, 9, 0, 6, 10]"
            },
            {
                id: "7.1",
                scenarioRef: "linked-list",
                question: "What is the head node after all operations?",
                options: ["30", "40", "50", "60"],
                answer: "40"
            },
            {
                id: "7.2",
                scenarioRef: "linked-list",
                question: "What is the full list after traversal?",
                options: ["30 -> 40 -> 50 -> 60", "40 -> 50 -> 60", "30 -> 40 -> 60", "40 -> 60 -> 50"],
                answer: "40 -> 50 -> 60"
            },
            {
                id: "7.3",
                scenarioRef: "linked-list",
                question: "Which node(s) were directly affected by deletion?",
                options: ["30 only", "30 and 40", "30 and 50", "30 and 60"],
                answer: "30 and 40"
            }
        ]
    }
];
const analyticalReasoning = [
    {
        title: "Paper 1",
        id: "reasoning-paper-1",
        questions: [
            {
                id: 1,
                question: "Which number comes next in the series: 2, 4, 8, 16, ___?",
                options: ["18", "24", "32", "64"],
                answer: "32"
            },
            {
                id: 2,
                question: "Find the odd one out: Apple, Banana, Carrot, Mango.",
                options: ["Apple", "Banana", "Carrot", "Mango"],
                answer: "Carrot"
            },
            {
                id: 3,
                question: "If A is taller than B, and B is taller than C, who is the shortest?",
                options: ["A", "B", "C", "Can't say"],
                answer: "C"
            }
        ]
    },
    {
        title: "Paper 2",
        id: "reasoning-paper-2",
        questions: [
            {
                id: 1,
                question: "Which shape does not belong: Square, Rectangle, Triangle, Circle?",
                options: ["Square", "Rectangle", "Triangle", "Circle"],
                answer: "Circle"
            },
            {
                id: 2,
                question: "What comes next: J, F, M, A, M, ___?",
                options: ["J", "N", "S", "O"],
                answer: "J"
            },
            {
                id: 3,
                question: "If RED = 27 and BLUE = 40, then GREEN = ?",
                options: ["51", "47", "49", "52"],
                answer: "49"
            }
        ]
    }
];

const aptitude = [
    {
        title: "Paper 1",
        id: "aptitude-paper-1",
        questions: [
            {
                id: 1,
                question: "What is 25% of 200?",
                options: ["25", "50", "75", "100"],
                answer: "50"
            },
            {
                id: 2,
                question: "If x + 3 = 7, then x = ?",
                options: ["2", "3", "4", "5"],
                answer: "4"
            },
            {
                id: 3,
                question: "Simplify: 2(3 + 4)",
                options: ["14", "16", "12", "10"],
                answer: "14"
            }
        ]
    },
    {
        title: "Paper 2",
        id: "aptitude-paper-2",
        questions: [
            {
                id: 1,
                question: "Area of a circle with radius 7 (π = 22/7) is?",
                options: ["144", "154", "164", "140"],
                answer: "154"
            },
            {
                id: 2,
                question: "Speed = Distance / ___",
                options: ["Time", "Speed", "Mass", "Work"],
                answer: "Time"
            },
            {
                id: 3,
                question: "Average of 10, 20, and 30 is:",
                options: ["15", "20", "25", "30"],
                answer: "20"
            }
        ]
    }
];
export const categories = {
    coding: { id: "coding", title: "Ability to Code", papers: abilityToCode },
    language: { id: "language", title: "Language Reasoning", papers: languageReasoning },
    reasoning: { id: "reasoning", title: "Analytical Reasoning", papers: analyticalReasoning },
    aptitude: { id: "aptitude", title: "Aptitude", papers: aptitude },
};

export default function CeeExamMCQs() {
    const [activeCategory, setActiveCategory] = useState("coding");
    const navigate = useNavigate();
    const isPaperRoute = useMatch("/cee/exam/mcqs/:paperId");

    const handlePaperClick = (paper) => {
        navigate(`/cee/exam/mcqs/${paper.id}`);
    };

    // ✅ Paper Route View
    if (isPaperRoute) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 max-h-[75vh] overflow-y-auto">
                <Outlet />
            </div>
        );
    }

    // ✅ Default View
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