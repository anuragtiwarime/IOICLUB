import {useState} from "react";
import {Outlet, useMatch, useNavigate} from "react-router-dom";
import QuestionPaperCard from "@/components/QuestionPaperCard.jsx";
import {cn} from "@/lib/utils.js";

const abilityToCode = [
    {
        title: "Paper 1",
        id: "coding-paper-1",
        questions: [
            {
                id: 1,
                question: "Scenario\n\n" +
                    "Imagine you have a pile of plates on a table. You can do the following actions with the plates:\n" +
                    "\t\t● Put a plate on the pile: Add a plate to the top of the pile.\n" +
                    "\t\t● Take a plate off the pile: Remove the plate from the top of the pile.\n" +
                    "\t\t● Check the top plate: See which plate is on top of the pile (the plate that you would remove if\n" +
                    "you took one off).\n" +
                    "\t\t● Check if the pile is empty: See if there are any plates on the table.\n" +
                    "The pile of plates works like a stack of dishes at a buffet — you always add and remove plates from the\n" +
                    "top.\n" +
                    "\n" +
                    "Initial Condition: The pile of plates starts empty.\n" +
                    "\n" +
                    "Commands:\n" +
                    "\t\t1. Put a plate on the pile (color: Red)\n" +
                    "\t\t2. Put a plate on the pile (color: Blue)\n" +
                    "\t\t3. Check the top plate\n" +
                    "\t\t4. Put a plate on the pile (color: Green)\n" +
                    "\t\t5. Take a plate off the pile\n" +
                    "\t\t6. Check the top plate\n" +
                    "\n" +
                    "After the 3rd command (Check the top plate), what color is the top plate?",
                options: ["Red", "Blue", "Green", "Non of the above"],
                answer: "Blue"
            },
            {
                id: 2,
                question: "After the 5th command (Take a plate off the pile), what color is the top plate?",
                options: ["Red", "Blue", "Green", "Non of the above"],
                answer: "Blue"
            },
            {
                id: 3,
                question: "What is the state of the pile after the 6th command (Check the top plate)?",
                options: [
                    "Empty",
                    "Contains one plate (Red)",
                    "Contains two plates (Red and Blue)",
                    "Contains one plate (Blue)"
                ],
                answer: "Contains two plates (Red and Blue)"
            },
            {
                id: 4,
                question: "Queue (Waiting Line)\n\n" +
                    "Imagine a queue like a line of people waiting at a bus stop. The first person to get in line is the first one\n" +
                    "to get on the bus. This is called First In, First Out (FIFO).\n\n" +
                    "Scenario\n" +
                    "You are at a bus stop. The bus can only pick up one person at a time, and they must get on in the order\n" +
                    "they arrived.\n" +
                    "\t\t● Commands:\n" +
                    "\t\t\t\t1. A person arrives and gets in line (Person A).\n" +
                    "\t\t\t\t2. Another person arrives and gets in line (Person B).\n" +
                    "\t\t\t\t3. The bus arrives and picks up the first person in line.\n" +
                    "\t\t\t\t4. Another person arrives and gets in line (Person C).\n" +
                    "\t\t\t\t5. The bus arrives again and picks up the next person in line.\n\n" +
                    "After command 3 (The bus picks up the first person in line), who gets on the bus?",
                options: ["Person A", "Person B", "Person C", "No one"],
                answer: "Person A"
            },
            {
                id: 5,
                question: "After command 5 (The bus picks up the next person in line), who gets on the bus?",
                options: ["Person A", "Person B", "Person C", "No one"],
                answer: "Person B"
            },
            {
                id: 6,
                question: "Who is still in the line after all commands are done?",
                options: ["Person A", "Person B", "Person C", "No one"],
                answer: "Person C"
            },
            {
                id: 7,
                question: "Array (Fixed List of Items)\n\n" +
                    "An array is like a row of boxes where you can keep items. The boxes are numbered, so you can easily\n" +
                    "find or change what&#39;s inside any box.\n\n" +
                    "Scenario\n" +
                    "You have a row of 5 boxes numbered from 0 to 4. You can put items into the boxes and check what’s in\n" +
                    "each box.\n" +
                    "\t\t● Commands:\n" +
                    "\t\t\t\t1. Put \"Apple\" in box 0.\n" +
                    "\t\t\t\t2. Put \"Banana\" in box 2.\n" +
                    "\t\t\t\t3. Check what is in box 0.\n" +
                    "\t\t\t\t4. Put \"Orange\" in box 4.\n" +
                    "\t\t\t\t5. Check what is in box 2.\n\n" +
                    "What is in box 0 after command 3 (Check what’s in box 0)?",
                options: ["Apple", "Banana", "Orange", "Empty"],
                answer: "Apple"
            },
            {
                id: 8,
                question: "What is in box 2 after command 5 (Check what’s in box 2)?",
                options: ["Apple", "Banana", "Orange", "Empty"],
                answer: "Banana"
            },
            {
                id: 9,
                question: "What is in box 4 after all commands are done?",
                options: ["Apple", "Banana", "Orange", "Empty"],
                answer: "Orange"
            },
            {
                id: 10,
                question: "Linked List (Chain of Nodes)\n\n" +
                    "A linked list is like a chain of people holding hands, where each person (node) knows the person next to\n" +
                    "them. If you want to find someone, you have to start at the first person and follow the chain.\n" +
                    "\n" +
                    "Scenario\n" +
                    "You have a chain of people (nodes). Each person holds a card with their name, and they also know who’s\n" +
                    "next in the line.\n" +
                    "\t\t● Commands:\n" +
                    "\t\t\t\t1. Add &quot;John&quot; at the start of the chain.\n" +
                    "\t\t\t\t2. Add &quot;Sarah&quot; after John.\n" +
                    "\t\t\t\t3. Add &quot;Mike&quot; after Sarah.\n" +
                    "\t\t\t\t4. Check who is at the start of the chain.\n" +
                    "\t\t\t\t5. Remove the first person in the chain.\n\n" +
                    "Who is at the start of the chain after command 4 (Check who is at the start)?",
                options: ["John", "Sarah", "Mike", "No one"],
                answer: "John"
            },
            {
                id: 11,
                question: "Who is at the start of the chain after command 5 (Remove the first person)?",
                options: ["John", "Sarah", "Mike", "No one"],
                answer: "Sarah"
            },
            {
                id: 12,
                question: "Who is at the end of the chain after all commands?",
                options: ["John", "Sarah", "Mike", "No one"],
                answer: "Mike"
            },
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
        questions: [
            {
                id: 1,
                question: "Read the following passage and answer the question.\n\n" +
                    "\"Ravi wakes up early every morning and goes for a jog in the park. He enjoys listening to the birds and\n" +
                    "watching the sunrise. After jogging, he spends some time reading the newspaper\"\n\n" +
                    "What is Ravi's morning routine?",
                options: [
                    "Jogging, birdwatching, and reading the newspaper",
                    "Sleeping late and watching TV",
                    "Jogging in the evening and reading novels",
                    "Cooking breakfast and going to the park"
                ],
                answer: "Jogging, birdwatching, and reading the newspaper"
            },
            {
                id: 2,
                question: "Choose the correct synonym for the word \"abundant\" in the sentence below.\n\n" +
                    "\"The farmer's field was abundant with crops this year\"",
                options: ["Scarce", "Plentiful", "Barren", "Minimal"],
                answer: "Plentiful"
            },
            {
                id: 3,
                question: "Identify the incorrect statement about the passage below.\n\n" +
                    "\"The internet has revolutionized how people communicate. Emails, social media, and video calls allow\n" +
                    "individuals to connect instantly, no matter where they are in the world. However, this advancement has\n" +
                    "also raised concerns about data privacy and screen addiction.\"",
                options: [
                    "The internet has made global communication faster.",
                    "Screen addiction is a concern caused by internet usage.",
                    "Data privacy is no longer a concern with internet communication.",
                    "Social media is a tool for instant communication."
                ],
                answer: "Data privacy is no longer a concern with internet communication."
            },
            {
                id: 4,
                question: "Fill in the blank with the most appropriate option.\n\n" +
                    "\"Despite the unexpected rain, the match ___ on as scheduled.\"",
                options: ["continues", "continued", "is continuing", "will continue"],
                answer: "continued"
            },
            {
                id: 5,
                question: "Choose the most logical conclusion based on the passage below:\n\n" +
                    "\"As more people adopt electric vehicles (EVs), the demand for charging stations is expected to grow.\n" +
                    "Governments are investing heavily in infrastructure to meet this demand.\"",
                options: [
                    "EVs do not require charging infrastructure.",
                    "The popularity of EVs may decrease in the future.",
                    "More charging stations will encourage the use of EVs.",
                    "Governments are reducing investment in EVs."
                ],
                answer: "More charging stations will encourage the use of EVs."
            },
            {
                id: 6,
                question: "Which sentence best explains the author’s perspective in the passage below?\n\n" +
                    "\"Education is a powerful tool for social change. It can reduce inequality, empower individuals, and foster innovation. Countries that prioritize education often experience economic growth and societal progress.\"",
                options: [
                    "The author is indifferent about education's role in societal progress.",
                    "The author believes education is essential for both individuals and societies.",
                    "The author criticizes countries that invest in education.",
                    "The author suggests education has limited influence on innovation."
                ],
                answer: "The author believes education is essential for both individuals and societies."
            },
            {
                id: 7,
                question: "Analyze the purpose of the sentence below in the context of the paragraph.\n\n" +
                    "\"While smartphones provide convenience, they also lead to distractions that can affect productivity.\"",
                options: [
                    "To highlight the primary benefit of smartphones",
                    "To present a balanced view of smartphones' impact",
                    "To argue against the use of smartphones in daily life",
                    "To suggest ways to improve smartphone productivity"
                ],
                answer: "To present a balanced view of smartphones' impact"
            },
            {
                id: 8,
                question: "What can be inferred from the following passage?\n\n" +
                    "\"In recent years, companies have adopted flexible work policies. Employees are given the choice to work from home or come to the office. Surveys show that many prefer a hybrid model, combining both options.\"",
                options: [
                    "Employees no longer want to work from the office.",
                    "Flexible work policies lead to lower productivity.",
                    "Hybrid work models appeal to many employees.",
                    "Companies are eliminating office spaces entirely."
                ],
                answer: "Hybrid work models appeal to many employees."
            },
            {
                id: 9,
                question: "Choose the correct preposition to complete the sentence:\n\n" +
                    "\"The teacher explained the lesson ___ great detail.\"",
                options: ["with", "in", "on", "at"],
                answer: "in"
            },
            {
                id: 10,
                question: "Identify the grammatically correct sentence:",
                options: [
                    "She has went to the market.",
                    "He have been working hard all day.",
                    "They were playing in the park yesterday.",
                    "I has seen this movie before."
                ],
                answer: "They were playing in the park yesterday."
            },
            {
                id: 11,
                question: "What is the logical connection between these two sentences?\n\n" +
                    "\"The weather forecast predicted heavy rain tomorrow.\"\n" +
                    "\"As a result, the cricket match may be postponed.\"",
                options: ["Contradiction", "Cause and effect", "Comparison", "Generalization"],
                answer: "Cause and effect"
            },
            {
                id: 12,
                question: "Find the odd one out:",
                options: ["Triangle", "Circle", "Rectangle", "Cube"],
                answer: "Cube"
            },
            {
                id: 13,
                question: "Which word best completes the analogy?\n\n" +
                    "\"Teacher is to school as doctor is to ___.\"",
                options: ["Hospital", "Medicine", "Patient", "Nurse"],
                answer: "Hospital"
            },
            {
                id: 14,
                question: "Determine the conclusion that logically follows from the statements below:\n\n" +
                    "Statement 1: Some musicians are composers.\n" +
                    "Statement 2: All composers are creative.\n" +
                    "Which of the following conclusions is valid?",
                options: [
                    "All musicians are creative.",
                    "Some musicians are not creative.",
                    "Some musicians are creative.",
                    "All composers are musicians."
                ],
                answer: "Some musicians are creative."
            },
            {
                id: 15,
                question: "Evaluate the following statement:\n\n" +
                    "\"If all poets are creative and some writers are poets, then which of the following must be true?\"",
                options: [
                    "All writers are creative.",
                    "Some creative people are writers.",
                    "All poets are writers.",
                    "Some writers are not creative."
                ],
                answer: "Some creative people are writers."
            },
        ]
    },
    {
        title: "Paper 2",
        id: "language-paper-2",
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
                question: "A woman is looking at a picture. In the picture, there are two people: a man and a woman. The man is the son of the woman in the picture. If the woman in the picture is the mother of the woman looking at the picture, how is the man related to the woman looking at the picture?",
                options: ["Brother in Law", "Father in law", "Brother", "Cannot be determined"],
                answer: "Brother"
            },
            {
                id: 4,
                question: "Consider the following statements.\n\n" +
                    "\t\t1. All Augusts are September.\n" +
                    "\t\t2. No September is October.\n" +
                    "\t\t3. All Octobers are November.\n" +
                    "\t\t4. Some Septembers are July.\n\n" +
                    "\t\tConclusion – I:  Some Augusts are November.\n" +
                    "\t\tConclusion – II: Some Novembers are July.\n\n" +
                    "Which of the following options is correct?",
                options: [
                    "Only Conclusion – I follows.",
                    "Only Conclusion – II follows.",
                    "Both Conclusion – I and Conclusion – II follows.",
                    "Neither Conclusion – I nor Conclusion – II follows."
                ],
                answer: "Neither Conclusion – I nor Conclusion – II follows."
            },
            {
                id: 6,
                question: "In a code language 'EINSTEIN' is written as 'DJMTSFHO'. How is 'RUTHERFORD' written in that code language?",
                options: [
                    "SVUIFSGPSE",
                    "SWUJDTFQTD",
                    "QUSJDSDPRC",
                    "QVSIDSEPQE"
                ],
                answer: "QVSIDSEPQE"
            },
            {
                id: 7,
                question: "Find the next term of the given sequence\n\n" +
                    "\t\t15, 8, 9, 15, 32, …",
                options: [
                    "77.5",
                    "80",
                    "82.5",
                    "85"
                ],
                answer: "80"
            },
            {
                id: 8,
                question: "Amit is 40 m South-West of Basu. Chetan is 40 m South-East of Basu. Then, Chetan is in which direction of Amit?",
                options: [
                    "East",
                    "West",
                    "North-east",
                    "South"
                ],
                answer: "East"
            },
            {
                id: 9,
                question: "Consider the following statements.\n\n" +
                    "\t\t1. Some Rains are Sky.\n" +
                    "\t\t2. All Roads are Plain.\n" +
                    "\t\t3. Some Plain are Sky.\n\n" +
                    "\t\tConclusion – I:  Some Rains are not Plain.\n" +
                    "\t\tConclusion – II: Some Sky can be Road.\n\n" +
                    "Which of the following options is correct?",
                options: [
                    "Only Conclusion – I follows.",
                    "Only Conclusion – II follows.",
                    "Both Conclusion – I and Conclusion – II follows.",
                    "Neither Conclusion – I nor Conclusion – II follows."
                ],
                answer: "Neither Conclusion – I nor Conclusion – II follows."
            },
            {
                id: 10,
                question: "Three Intelligent students have been given 14 chocolates in total.\n\n" +
                    "They were asked about the number of chocolates given to each.\n" +
                    "None of them wanted to disclose the exact number of chocolates.\n" +
                    "Hence they made the following statements:\n\n" +
                    "\t\tA: I know that ‘B’ and ‘C’ definitely have different numbers of chocolates.\n" +
                    "\t\tB: I already knew that all of us have different numbers of chocolates.\n" +
                    "\t\tC: Now, I know the exact number of chocolates with each one of us.\n\n" +
                    "Can you guess how many chocolates A, B, and C have?",
                options: [
                    "1, 7, 6",
                    "3, 7, 4",
                    "3, 9, 2",
                    "1, 11, 2"
                ],
                answer: "3, 7, 4"
            },
            {
                id: 11,
                question: "64 balls are there in a bag. One of the balls is heavier than the others (defective ball). You are provided a weighing balance. What is the minimum number of weighings required to find out the heavier ball?",
                options: [
                    "6",
                    "5",
                    "4",
                    "None of these"
                ],
                answer: "6"
            },
            {
                id: 14,
                question: "In the following addition every alphabet represents a distinct digit.\n\n" +
                    "Find the value of P and E.\n\n" +
                    "\t\tU S S R\n" +
                    "\t\t+ U S A\n" +
                    "\t_________\n" +
                    "\t\  P E A C E",
                options: [
                    "1, 0",
                    "1, 9",
                    "2, 3",
                    "2, 9"
                ],
                answer: "1, 9"
            },
            {
                id: 15,
                question: "There are 32 players in a knockout tournament.\n\n" +
                    "In a knockout tournament, if a player loses a match, he/she is out of the tournament.\n" +
                    "There are no draws in the tournament.\n\n" +
                    "How many matches need to be conducted to decide the winner of the tournament?",
                options: [
                    "16",
                    "31",
                    "30",
                    "17"
                ],
                answer: "31"
            },
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
                question: "In a 1000 m race, A wins over B by 150 m and in the same race C can give a startup of 250 m to B. By how much distance A gives a start to C, so that A beats C by 200 metres in a race of 1000 m?",
                options: [
                    "162.5 m",
                    "160.5 m",
                    "155 m",
                    "200 m"
                ],
                answer: "162.5 m"
            },
            {
                id: 2,
                question: "A person sold a clock at a loss of 20%. If he had sold the clock for ₹20 more, then he would have got a gain of 20%. The cost price of the clock is?",
                options: [
                    "₹45",
                    "₹50",
                    "₹60",
                    "₹55"
                ],
                answer: "₹50"
            },
            {
                id: 3,
                question: "The sum of squares of three positive numbers is 2100.\n\n" +
                    "The ratio of the first number to the second number is 2:1,\n" +
                    "and the ratio of the second number to the third number is 2:1.\n\n" +
                    "What is the second number?",
                options: [
                    "40",
                    "20",
                    "10",
                    "50"
                ],
                answer: "20"
            },
            {
                id: 4,
                question: "In an examination, the average marks of students were found to be 70. Due to a data entry error, the marks of 30 candidates were incorrectly recorded as 90 each instead of their actual scores, i.e., 50. After correcting these marks, the average marks of all the students came down to 65. How many students appeared for the examination?",
                options: [
                    "100",
                    "120",
                    "240",
                    "300"
                ],
                answer: "240"
            },
            {
                id: 5,
                question: "A sum of money becomes four times at the simple interest rate of 5% per annum. At what rate would the sum have become ten times in the same time?",
                options: [
                    "10",
                    "25",
                    "20",
                    "15"
                ],
                answer: "15"
            },
            {
                id: 6,
                question: "Find the four consecutive numbers in an increasing arithmetic progression (AP)\n\n" +
                    "such that their sum is 180 and the product of the first and last numbers is 200 less than the product of the middle two numbers.",
                options: [
                    "15, 35, 55, 75",
                    "35, 45, 65, 85",
                    "30, 40, 50, 60",
                    "20, 40, 50, 70"
                ],
                answer: "30, 40, 50, 60"
            },
            {
                id: 8,
                question: "Let x, y ∊ N and 4x + 15y = 270. The number of solutions is:",
                options: [
                    "15",
                    "4",
                    "6",
                    "infinite"
                ],
                answer: "4"
            },
            {
                id: 9,
                question: "In a Triangle ABC, ∠B = ∠C = 50°. Line BA is produced up to D such that BA = AD. Find the value of ∠BCD.",
                options: [
                    "60°",
                    "30°",
                    "90°",
                    "40°"
                ],
                answer: "30°"
            },
            {
                id: 10,
                question: "A rectangular field costs Rs. 288 for leveling at 50 paise per square metre. If the ratio of length and breadth of the field is 9:4, find the breadth of the field.",
                options: [
                    "16 m",
                    "28 m",
                    "44 m",
                    "None of these"
                ],
                answer: "16 m"
            },
            {
                id: 11,
                question: "The total number of arrangements that can be made out of the letters of the word \"ATLANTA\" without altering the relative positions of vowels and consonants is:",
                options: [
                    "24",
                    "64",
                    "1028",
                    "128"
                ],
                answer: "24"
            },
            {
                id: 12,
                question: "A three-digit number is formed using the digits from 1, 2, 5, 7 randomly without repetition. What is the chance that this number is divisible by 3?",
                options: [
                    "7/9",
                    "1/9",
                    "2/9",
                    "None of the above"
                ],
                answer: "2/9"
            },
            {
                id: 13,
                question: "If P24100Q is completely divisible by 88, find the value of P+Q (where P and Q are natural numbers).",
                options: [
                    "10",
                    "15",
                    "20",
                    "13"
                ],
                answer: "15"
            },
            {
                id: 14,
                question: "Consider the given sets:\n\n" +
                    "A = {5,10,15,20,25,30,35,40}\n" +
                    "B = {10,20,30,40,50,60,70}\n\n" +
                    "What is the ratio of number of elements in (A ∩ B) and (A ∪ B)?",
                options: [
                    "1 : 3",
                    "4 : 11",
                    "5 : 12",
                    "1 : 2"
                ],
                answer: "4 : 11"
            },
            {
                id: 15,
                question: "Find the least number which when divided by 4, 5, 6 and 7 leaves a remainder of 3, but when divided by 3 leaves no remainder.",
                options: [
                    "423",
                    "213",
                    "217",
                    "417"
                ],
                answer: "423"
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