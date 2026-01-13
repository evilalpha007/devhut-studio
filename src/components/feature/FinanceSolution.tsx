"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import {
    ArrowRight,
    CreditCard,
    Plus,
    ArrowUpRight,
    MoreHorizontal,
    ArrowDownLeft,
    Send,
    Download,
    Home,
} from "lucide-react";

/**
 * Reusable Phone Frame Component
 * Styles a container to look like a modern smartphone with a dynamic island.
 */
const PhoneFrame = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={`relative rounded-[2.5rem] border-8 border-gray-900 bg-gray-900 overflow-hidden shadow-2xl ${className}`}
        >
            {/* Dynamic Island / Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-28 bg-black rounded-b-2xl z-20 flex justify-center items-center">
                <div className="w-16 h-4 bg-black rounded-full grid grid-cols-[1fr_4fr] gap-1 items-center px-1">
                    <div className="w-2 h-2 rounded-full bg-[#1c1c1e]" />
                    <div className="w-10 h-2 rounded-full bg-[#0a0a0a]" />
                </div>
            </div>

            {/* Screen Content Wrapper */}
            <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative pt-8">
                {children}
            </div>
        </div>
    );
};

/**
 * Left Phone Screen: Stats
 */
const StatsScreen = () => {
    return (
        <div className="flex flex-col h-full bg-gray-50 p-4 select-none">
            {/* Status Bar Mock */}
            <div className="flex justify-between items-center mb-6 px-1">
                <span className="text-xs font-semibold">9:41</span>
                <div className="flex gap-1">
                    <div className="w-4 h-3 bg-black rounded-sm" />
                    <div className="w-4 h-3 bg-black rounded-sm" />
                </div>
            </div>

            <div className="text-center mb-6">
                <h3 className="font-bold text-lg text-gray-900">Your Stats</h3>
            </div>

            <div className="bg-white rounded-2xl p-1 mb-6 shadow-sm flex justify-between">
                <button className="bg-blue-600 text-white rounded-xl px-4 py-2 text-xs font-medium flex-1">Daily</button>
                <button className="text-gray-500 rounded-xl px-4 py-2 text-xs font-medium flex-1 hover:bg-gray-50">Weekly</button>
                <button className="text-gray-500 rounded-xl px-4 py-2 text-xs font-medium flex-1 hover:bg-gray-50">Monthly</button>
            </div>

            <div className="bg-white rounded-3xl p-5 shadow-sm flex-1 mb-4 relative overflow-hidden">
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <p className="text-sm font-semibold text-gray-800">Report Expense</p>
                    </div>
                    <div className="bg-blue-100 p-1 rounded-full cursor-pointer">
                        <div className="bg-blue-600 w-2 h-2 rounded-full"></div>
                    </div>
                </div>

                {/* Mock Chart Area */}
                <div className="relative h-32 w-full mt-4">
                    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <path d="M0,80 C20,70 40,90 60,60 C80,30 100,20 120,50 C140,80 160,70 180,40 C200,20 220,10 240,30"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="3"
                            strokeLinecap="round"
                            className="drop-shadow-lg"
                        />
                        {/* Dot on the line */}
                        <circle cx="120" cy="50" r="4" fill="white" stroke="#3b82f6" strokeWidth="3" />

                        {/* Area under curve mock */}
                        <path d="M0,80 C20,70 40,90 60,60 C80,30 100,20 120,50 C140,80 160,70 180,40 C200,20 220,10 240,30 V150 H0 Z"
                            fill="url(#gradient)"
                        />
                    </svg>
                </div>
            </div>
            <div className="flex justify-between items-center mt-2 px-2 opacity-60">
                <span className="text-[10px] font-bold text-gray-900">Transactions</span>
                <span className="text-[10px] text-blue-600 font-bold hover:underline cursor-pointer">See all</span>
            </div>
        </div>
    );
};

/**
 * Center Phone Screen: Main Dashboard
 */
const MainScreen = () => {
    return (
        <div className="flex flex-col h-full bg-gray-50 p-5 pt-4 from-gray-50 to-white bg-linear-to-b select-none">
            {/* Status Bar */}
            <div className="flex justify-between items-center mb-6 px-1">
                <span className="text-xs font-semibold">9:41</span>
                <div className="flex gap-1">
                    <div className="w-4 h-3 bg-black rounded-sm" />
                    <div className="w-4 h-3 bg-black rounded-sm" />
                </div>
            </div>

            <div className="flex justify-between items-start mb-6">
                <div>
                    <p className="text-xs text-gray-500 mb-1">Good morning,</p>
                    <h3 className="font-bold text-xl text-gray-900">James Lee</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm">
                    <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">JL</div>
                </div>
            </div>

            <div className="flex gap-2 mb-6">
                <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-medium shadow-lg shadow-blue-200 active:scale-95 transition-transform">USD</button>
                <button className="bg-white text-gray-500 px-4 py-1.5 rounded-full text-xs font-medium border border-gray-100 hover:bg-gray-50 transition-colors">IDR</button>
                <button className="ml-auto text-blue-600 text-xs font-medium flex items-center gap-1 hover:text-blue-700">+ Add Currency</button>
            </div>

            {/* Credit Card */}
            <div className="bg-linear-to-br from-[#1e1e2e] via-[#2d2d44] to-[#1e1e2e] rounded-3xl p-6 text-white mb-8 relative overflow-hidden shadow-xl group cursor-pointer transform transition-transform hover:scale-[1.02]">
                {/* Glass effect blobs */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20"></div>

                <div className="flex justify-between items-start mb-8 relative z-10">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/10">
                            <CreditCard className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-xs font-medium text-gray-300">Fizen Card</span>
                    </div>
                    <div className="w-10 h-6 bg-white/10 rounded-md backdrop-blur-md border border-white/5" />
                </div>

                <div className="relative z-10">
                    <h2 className="text-2xl font-bold mb-1">$2,736.15</h2>
                    <p className="text-xs text-gray-400 tracking-widest font-mono">•••• 5318</p>
                </div>

                {/* Pagination Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between px-2">
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-700 group-hover:scale-110 transition-transform duration-300">
                        <ArrowUpRight className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-medium text-gray-600">Top-up</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-blue-600 shadow-lg shadow-blue-200 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        <ArrowDownLeft className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-medium text-gray-600">Withdraw</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-700 group-hover:scale-110 transition-transform duration-300">
                        <Send className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-medium text-gray-600">Transfer</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-700 group-hover:scale-110 transition-transform duration-300">
                        <Download className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-medium text-gray-600">Request</span>
                </div>
            </div>
        </div>
    );
};

/**
 * Right Phone Screen: Savings
 */
const SavingsScreen = () => {
    return (
        <div className="flex flex-col h-full bg-gray-50 p-4 select-none">
            {/* Status Bar */}
            <div className="flex justify-between items-center mb-6 px-1">
                <span className="text-xs font-semibold">9:41</span>
                <div className="flex gap-1">
                    <div className="w-4 h-3 bg-black rounded-sm" />
                    <div className="w-4 h-3 bg-black rounded-sm" />
                </div>
            </div>

            <div className="flex justify-between items-center mb-8">
                <h3 className="font-bold text-lg text-gray-900">Savings Detail</h3>
                <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center bg-white cursor-pointer hover:bg-gray-50">
                    <div className="w-4 h-4 border-2 border-gray-800 rounded-full border-t-transparent animate-spin-slow opacity-50"></div>
                </div>
            </div>

            <div className="bg-white rounded-[2rem] p-6 flex flex-col items-center justify-center shadow-sm mb-6 flex-1 border border-gray-50">
                <div className="w-16 h-16 bg-linear-to-br from-orange-50 to-orange-100 rounded-2xl flex items-center justify-center mb-4 text-3xl shadow-inner">
                    <Home className="w-8 h-8 text-orange-500" />
                </div>
                <p className="text-gray-500 text-xs font-medium mb-1 tracking-wide uppercase">House Savings</p>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">$13,500</h2>

                <div className="flex gap-4 w-full justify-between px-1">
                    <IconAction icon={<Plus className="w-4 h-4 text-blue-600" />} label="Add" />
                    <IconAction icon={<ArrowUpRight className="w-4 h-4 text-gray-400" />} label="Move" />
                    <IconAction icon={<ArrowRight className="w-4 h-4 text-gray-400" />} label="Transfer" />
                    <IconAction icon={<MoreHorizontal className="w-4 h-4 text-blue-600" />} label="More" />
                </div>
            </div>

            <div className="text-xs font-bold mb-2 px-1 text-gray-900">Linked to Card</div>
            <div className="bg-white p-3 rounded-xl border border-gray-100 flex items-center gap-3 cursor-pointer hover:border-blue-100 transition-colors">
                <div className="w-8 h-5 bg-blue-100 rounded flex items-center justify-center text-[8px] font-bold text-blue-700">VISA</div>
                <div className="flex-1">
                    <p className="text-[10px] font-bold text-gray-900">Primary Card</p>
                    <p className="text-[8px] text-gray-400">**** 4589</p>
                </div>
                <ArrowUpRight className="w-3 h-3 text-gray-400" />
            </div>
        </div>
    );
};

const IconAction = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
    <div className="flex flex-col items-center gap-2 group cursor-pointer">
        <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center bg-gray-50 group-hover:bg-white group-hover:shadow-md transition-all duration-300">
            {icon}
        </div>
        <span className="text-[10px] text-gray-500 font-medium">{label}</span>
    </div>
)


/**
 * Main Section Component
 */
const FinanceSolution = () => {
    // Animation variants
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
    };

    const phoneLeft: Variants = {
        hidden: { opacity: 0, x: 40, y: 20 },
        visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
    };

    const phoneCenter: Variants = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" as const } }
    };

    const phoneRight: Variants = {
        hidden: { opacity: 0, x: -40, y: 20 },
        visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
    };

    return (
        <section className="py-24 bg-white overflow-hidden" id="finance-solutions">
            <div className="container-1 mx-auto px-4 text-center mb-10 md:mb-16">

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-6 tracking-tight"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.2 } }
                        }}
                    >
                        <motion.span
                            className="inline-block"
                            variants={{
                                hidden: { opacity: 0, x: -40, y: 40 },
                                visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                        >
                            Your Finance
                        </motion.span>{" "}
                        <motion.span
                            className="inline-block text-brand-blue font-medium"
                            variants={{
                                hidden: { opacity: 0, x: -40, y: 40 },
                                visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                        >
                            Solutions
                        </motion.span>
                    </motion.h2>

                    <div className="flex justify-center mb-8">
                        <div className="mb-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="1 1 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="0.7"
                                strokeLinecap="square"
                                strokeLinejoin="round"
                                className="w-14 h-14 text-brand-blue"
                            >
                                <path d="M12 4V10" />
                                <path d="M12 14V21" />
                                <path d="M3 12H10" />
                                <path d="M14 12H21" />
                            </svg>
                        </div>
                    </div>

                    <p className="text-gray-500 max-w-lg mx-auto text-lg leading-relaxed">
                        Experience the peace of mind that comes with having your finances under control.
                    </p>
                </motion.div>
            </div>

            <div className="container mx-auto px-4">
                {/* Phones Layout Grid 
            - On desktop: 3 columns, overlapping effect created by scale and margin
            - On mobile: Stacked or scrollable
        */}
                <div className="flex flex-row overflow-x-auto pb-8 lg:pb-0 lg:overflow-visible items-center lg:items-end justify-start lg:justify-center gap-6 lg:gap-0 h-auto lg:h-[520px] mx-auto relative mt-12 px-4 lg:px-0 snap-x snap-mandatory scrollbar-hide">

                    {/* Background Blob - Hidden on mobile to reduce clutter/weird overlaps */}
                    <div className="hidden lg:block absolute -top-13 rounded-full bg-linear-to-b from-blue-100 to-blue-700 h-[380px] w-[500px] blur-2xl"></div>


                    {/* Left Phone */}
                    <motion.div
                        className="relative z-10 shrink-0 w-full max-w-[230px] lg:mx-0 lg:mr-[-40px] lg:mb-8 origin-bottom-right snap-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={phoneLeft}
                    >
                        <PhoneFrame className="w-full h-[400px] scale-95 lg:hover:scale-95 transition-transform duration-500 shadow-xl opacity-90 lg:opacity-100">
                            <StatsScreen />
                        </PhoneFrame>
                    </motion.div>

                    {/* Center Phone */}
                    <motion.div
                        className="relative z-30 shrink-0 w-full max-w-[270px] lg:mx-0 lg:mb-0 snap-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={phoneCenter}
                    >
                        <PhoneFrame className="w-full h-[500px] shadow-2xl shadow-blue-900/10 ring-1 ring-black/5">
                            <MainScreen />
                        </PhoneFrame>
                    </motion.div>

                    {/* Right Phone */}
                    <motion.div
                        className="relative z-10 shrink-0 w-full max-w-[230px] lg:mx-0 lg:ml-[-40px] lg:mb-8 origin-bottom-left snap-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={phoneRight}
                    >
                        <PhoneFrame className="w-full h-[400px] scale-95 lg:hover:scale-95 transition-transform duration-500 shadow-xl opacity-90 lg:opacity-100">
                            <SavingsScreen />
                        </PhoneFrame>
                    </motion.div>



                    {/* Gradient Fade Overlay */}
                    <div className="pointer-events-none absolute -bottom-12 left-0 w-full h-[20vw] z-40 bg-linear-to-t from-white via-white/80 to-transparent" />
                </div>
            </div>

            {/* Decorative Background Images */}
            {/* Top Left */}
            <img
                src="/image/bgsvg/bgleft.svg"
                alt=""
                className="absolute top-21 left-10 w-[100px] md:w-[300px] h-auto pointer-events-none "
            />

            {/* Middle Right */}
            <img
                src="/image/bgsvg/bgleft.svg"
                alt=""
                className="absolute top-1/2 right-10 -translate-y-1/2 w-[100px] md:w-[300px] h-auto pointer-events-none  "
            />
        </section>
    );
};

export default FinanceSolution;
