import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils.js";
import {
    ChevronDown,
    ChevronRight,
    Menu,
    X,
    Home,
    BookOpen,
    VideoIcon,
    FileText,
    HelpCircle,
    CheckSquare,
    Award
} from "lucide-react";
import Footer from "@/components/Footer.jsx";

export default function CeeLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [expandedItem, setExpandedItem] = useState(null);
    const location = useLocation();

    // Generate breadcrumbs from current path
    const generateBreadcrumbs = () => {
        const paths = location.pathname.split('/').filter(Boolean);
        return paths.map((path, index) => {
            const formattedPath = path.replace(/-/g, ' ');
            return {
                label: formattedPath,
                path: '/' + paths.slice(0, index + 1).join('/')
            };
        });
    };

    const breadcrumbs = generateBreadcrumbs();

    const navigationItems = [
        {
            label: "CEE Exam Prep",
            to: "/cee/exam",
            icon: <BookOpen size={16} />,
            subItems: [
                { label: "Videos", to: "/cee/exam/videos", icon: <VideoIcon size={14} /> },
                { label: "Reading", to: "/cee/exam/reading", icon: <FileText size={14} /> },
                { label: "MCQs", to: "/cee/exam/mcqs", icon: <CheckSquare size={14} /> },
                { label: "Fill Blanks", to: "/cee/exam/fill-in-the-blanks", icon: <HelpCircle size={14} /> }
            ]
        },
        {
            label: "CEE Interview Prep",
            to: "/cee/interview",
            icon: <Award size={16} />,
            subItems: [
                { label: "Coming Soon", to: "/cee/interview", icon: <ChevronRight size={14} /> }
            ]
        },
    ];

    const toggleExpand = (path) => {
        setExpandedItem(prev => (prev === path ? null : path));
    };

    const isCeeRoute = location.pathname === "/cee";

    return (
        <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-950 text-white pt-16">
            <div className="mx-auto max-w-7xl px-4 py-6">
                <header className="mb-6">
                    <div className="bg-zinc-800/80 backdrop-blur-sm shadow-lg rounded-xl px-6 py-4 border border-zinc-700/50 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                                className="p-1.5 rounded-md bg-zinc-700/50 hover:bg-zinc-700 transition-colors cursor-pointer md:hidden"
                            >
                                {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
                            </button>
                            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                                CEE Portal
                            </h1>
                        </div>
                        <div className="hidden md:flex items-center space-x-4">
                            <div className="bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full text-xs text-blue-400">
                                Beta Access
                            </div>
                        </div>
                    </div>
                </header>

                <div className={cn("flex flex-col md:flex-row", sidebarOpen ? "md:gap-6" : "")}>
                    {/* Sidebar Navigation */}
                    <aside className={cn(
                        "transition-all duration-300 ease-in-out",
                        sidebarOpen ? "w-full md:w-64 opacity-100 mb-4 md:mb-0" : "hidden opacity-0 overflow-hidden"
                    )}>
                        <div className="bg-zinc-800/80 backdrop-blur-sm rounded-xl shadow-lg border border-zinc-700/50 p-4 md:sticky md:top-6">
                            <nav className="space-y-1">
                                {navigationItems.map((item) => {
                                    const isItemActive = location.pathname.startsWith(item.to);
                                    const isExpanded = expandedItem === item.to;

                                    return (
                                        <div key={item.to} className="mb-3">
                                            <div
                                                className="flex items-center cursor-pointer"
                                                onClick={() => toggleExpand(item.to)}
                                            >
                                                <NavLink
                                                    to={item.to}
                                                    end={item.to === "/cee/exam" || item.to === "/cee/interview"}
                                                    className={({ isActive }) =>
                                                        cn(
                                                            "flex-1 flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                                            isActive || isExpanded
                                                                ? "bg-blue-600 text-white shadow"
                                                                : "text-zinc-300 hover:bg-zinc-700 hover:text-white"
                                                        )
                                                    }
                                                >
                                                    {item.icon}
                                                    {item.label}
                                                </NavLink>
                                                {item.subItems.length > 0 && (
                                                    <span className="p-1 hover:bg-zinc-700/50 rounded-md ml-1">
                                                        {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                                    </span>
                                                )}
                                            </div>

                                            {isExpanded && (
                                                <div className="ml-4 mt-1 space-y-1 pl-2 border-l border-zinc-700/50">
                                                    {item.subItems.map(subItem => (
                                                        <NavLink
                                                            key={subItem.to}
                                                            to={subItem.to}
                                                            className={({ isActive }) =>
                                                                cn(
                                                                    "block px-3 py-1.5 rounded-md text-xs font-medium transition-colors flex items-center gap-2",
                                                                    isActive
                                                                        ? "bg-blue-500/20 text-blue-400 shadow-sm"
                                                                        : "text-zinc-400 hover:bg-zinc-700/50 hover:text-zinc-300"
                                                                )
                                                            }
                                                        >
                                                            {subItem.icon}
                                                            {subItem.label}
                                                        </NavLink>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <main className="flex-1 flex flex-col">
                        {/* Breadcrumbs */}
                        <div className="bg-zinc-800/60 backdrop-blur-sm mb-4 px-4 py-2 rounded-lg border border-zinc-700/50 overflow-x-auto">
                            <div className="flex items-center text-sm text-zinc-400 whitespace-nowrap">
                                <NavLink to="/" className="hover:text-zinc-200 transition-colors">
                                    <Home size={14} />
                                </NavLink>
                                {breadcrumbs.map((crumb, index) => (
                                    <div key={crumb.path} className="flex items-center">
                                        <span className="mx-2 text-zinc-600">/</span>
                                        {index === breadcrumbs.length - 1 ? (
                                            <span className="text-zinc-200">{crumb.label}</span>
                                        ) : (
                                            <NavLink to={crumb.path} className="hover:text-zinc-200 transition-colors">
                                                {crumb.label}
                                            </NavLink>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="bg-zinc-800/80 backdrop-blur-sm rounded-xl shadow-lg border border-zinc-700/50 p-4 sm:p-6 md:p-8 min-h-[70vh]">
                            {isCeeRoute ? (
                                <div className="text-center text-zinc-300 text-lg sm:text-xl py-12 space-y-8">
                                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
                                        Welcome to the CEE Preparation Portal!
                                    </h2>
                                </div>
                            ) : (
                                <Outlet />
                            )}
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    );
}

