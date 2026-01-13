"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

import { ChevronDown, ArrowRight, ShieldCheck, MoreHorizontal, Check, Star } from "lucide-react";

// --- Visual Components ---

const ActivityVisual = () => {
    return (
        <div className="relative w-full h-full min-h-[400px] aspect-square flex items-center justify-center overflow-hidden bg-blue-500 rounded-[2rem] shadow-sm">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-400/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            {/* Activity Card */}
            <div className="relative bg-white rounded-[2rem] p-6 w-[320px] shadow-2xl transition-transform hover:scale-[1.02] duration-500">
                <div className="flex justify-between items-center mb-8">
                    <h4 className="text-xl font-semibold text-gray-900">Activity</h4>
                    <div className="flex items-center gap-1 text-xs text-gray-500 border border-gray-200 rounded-lg px-2 py-1 cursor-pointer hover:bg-gray-50">
                        Month <ChevronDown className="w-3 h-3" />
                    </div>
                </div>

                {/* Gauge Chart */}
                <div className="relative h-32 mb-8 flex justify-center">
                    <svg viewBox="0 0 200 110" className="w-48 overflow-visible">
                        {/* Background Arc */}
                        <path
                            d="M 20 100 A 80 80 0 0 1 180 100"
                            fill="none"
                            stroke="#E2E8F0"
                            strokeWidth="25"
                            strokeLinecap="round"
                        />
                        {/* Progress Arc (75%) */}
                        <path
                            d="M 20 100 A 80 80 0 0 1 180 100"
                            fill="none"
                            stroke="url(#activity-gradient)"
                            strokeWidth="25"
                            strokeLinecap="round"
                            strokeDasharray="251.2" // Full arc length (PI * 80)
                            strokeDashoffset="62.8" // 25% offset (251.2 * 0.25)
                            className="drop-shadow-lg"
                        />
                        <defs>
                            <linearGradient id="activity-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#6366f1" /> {/* Indigo */}
                                <stop offset="100%" stopColor="#3b82f6" /> {/* Blue */}
                            </linearGradient>
                        </defs>
                        <text x="100" y="85" textAnchor="middle" className="text-3xl font-bold fill-gray-800">75%</text>
                    </svg>
                </div>

                {/* Stats */}
                <div className="flex justify-between items-center mb-8 px-2">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                            <span className="text-xs font-medium text-gray-500">Daily payment</span>
                        </div>
                        <p className="text-lg font-bold text-gray-900 ml-4.5">55%</p>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                            <span className="text-xs font-medium text-gray-500">Hobby</span>
                        </div>
                        <p className="text-lg font-bold text-gray-900 ml-4.5">20%</p>
                    </div>
                </div>

                {/* Footer Button */}
                <button className="w-full py-3 px-4 border border-gray-200 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer group">
                    View all activity <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
            </div>
        </div>
    );
};

const FinancialGrowthVisual = () => {
    return (
        <div className="relative w-full h-full min-h-[400px] aspect-square flex items-center justify-center overflow-hidden bg-[#5b95ff] rounded-[2rem] shadow-sm">
            {/* Background Decor */}
            <div className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}
            />
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300/20 rounded-full blur-2xl" />

            {/* Main Card */}
            <div className="relative bg-white rounded-[2rem] p-6 w-[360px] shadow-2xl transition-transform hover:scale-[1.02] duration-500">
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <h4 className="text-lg font-semibold text-gray-900">Financial Growth</h4>
                    </div>
                    <div className="p-2 hover:bg-gray-50 rounded-full cursor-pointer">
                        <MoreHorizontal className="w-5 h-5 text-gray-400" />
                    </div>
                </div>

                {/* Chart Area */}
                <div className="relative h-48 w-full">
                    {/* Y Axis Labels (Left) */}
                    <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[10px] text-gray-400 font-medium h-full pr-2">
                        <span>10</span>
                        <span>8</span>
                        <span>6</span>
                        <span>4</span>
                        <span>2</span>
                        <span>0</span>
                    </div>

                    {/* Y Axis Labels (Right - percentages) */}
                    <div className="absolute right-0 top-0 bottom-6 flex flex-col justify-between text-[10px] text-gray-400 font-medium h-full pl-2">
                        <span>100%</span>
                        <span>80%</span>
                        <span>60%</span>
                        <span>40%</span>
                        <span>20%</span>
                        <span>0%</span>
                    </div>

                    {/* Grid & Bars Container */}
                    <div className="absolute left-6 right-8 top-0 bottom-6">
                        {/* Horizontal Grid Lines */}
                        {[0, 1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="absolute w-full h-px bg-gray-100" style={{ top: `${i * 20}%` }} />
                        ))}

                        {/* Bars */}
                        <div className="absolute inset-0 flex items-end justify-between px-1">
                            {[40, 65, 35, 60, 40, 30, 25].map((height, i) => (
                                <div key={i} className="w-6 bg-indigo-500 rounded-t-md relative group transition-all duration-300 hover:bg-indigo-600" style={{ height: `${height}%` }}>
                                    {/* Tooltip on hover */}
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                        ${height * 10}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Line Chart Overlay (SVG) */}
                        <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
                            <path
                                d="M 10 90 C 20 80, 40 50, 60 60 S 90 70, 110 40 S 140 30, 170 20 S 210 5, 240 10"
                                fill="none"
                                stroke="#22d3ee" // Cyan-400
                                strokeWidth="3"
                                strokeLinecap="round"
                                className="drop-shadow-md"
                            />
                            {/* Floating Point Label */}
                            <g transform="translate(130, 40)">
                                <rect x="-16" y="-24" width="32" height="20" rx="4" fill="#1e293b" />
                                <text x="0" y="-10" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">45%</text>
                                <circle r="4" fill="#1e293b" />
                                <circle r="2" fill="#22d3ee" />
                            </g>
                        </svg>
                    </div>

                    {/* X Axis Labels */}
                    <div className="absolute bottom-0 left-6 right-8 flex justify-between pt-2">
                        {['Oct 1', 'Oct 2', 'Oct 3', 'Oct 4', 'Oct 5', 'Oct 6', 'Oct 7'].map((label, i) => (
                            <span key={i} className="text-[10px] text-gray-400 font-medium">{label}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}


const SecurityVisual = () => {
    return (
        <div className="relative w-full h-full min-h-[400px] aspect-square flex items-center justify-center overflow-hidden bg-blue-500 rounded-[2rem] shadow-sm">
            {/* Abstract Background */}
            <div className="absolute inset-0 bg-[#3b82f6]">
                {/* Curves */}
                <svg className="absolute bottom-0 left-0 w-full h-full opacity-20" viewBox="0 0 400 400" preserveAspectRatio="none">
                    <path d="M0,300 C150,400 250,200 400,300 L400,400 L0,400 Z" fill="white" />
                    <path d="M0,350 C100,250 300,450 400,350 L400,400 L0,400 Z" fill="white" />
                </svg>
                {/* Grid */}
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                        backgroundSize: '50px 50px'
                    }}
                />
            </div>

            {/* Main Card */}
            <div className="relative bg-white rounded-[2rem] p-8 w-[320px] shadow-2xl flex flex-col items-center transition-transform hover:scale-[1.02] duration-500">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 ring-8 ring-blue-50">
                    <ShieldCheck className="w-10 h-10 text-blue-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Secure Vault</h4>
                <p className="text-center text-gray-500 mb-8 leading-relaxed">
                    Bank-grade AES-256 bit encryption keeping your assets safe.
                </p>

                <div className="w-full bg-gray-50 rounded-xl p-4 border border-gray-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <Check className="w-5 h-5 text-green-600" strokeWidth={3} />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-gray-900">System Protected</p>
                        <p className="text-xs text-green-600 font-medium">No threats detected</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// --- Main Component ---

export function Future() {
    const slideInLeft: Variants = {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const slideInRight: Variants = {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container-1 mx-auto px-4 max-w-7xl">

                {/* Section Header */}
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-blue-50/50 shadow-sm mb-6">
                        <Star className="w-4 h-4 text-brand-blue fill-brand-blue" />
                        <span className="text-sm text-brand-blue font-medium">Why Choose Us</span>
                    </div>
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-7xl tracking-tight text-slate-900 font-medium"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.2 } }
                        }}
                    >
                        <motion.span
                            className="block mb-2"
                            variants={{
                                hidden: { opacity: 0, x: -40, y: 40 },
                                visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                        >
                            Experience The
                        </motion.span>
                        <motion.span
                            className="block text-brand-blue "
                            variants={{
                                hidden: { opacity: 0, x: -40, y: 40 },
                                visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                        >
                            Future Of Finance
                        </motion.span>
                    </motion.h2>
                </div>

                {/* Feature Blocks */}
                <div className="space-y-32">

                    {/* Block 1: Activity (Image Left, Text Right) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-24 items-center">
                        <motion.div
                            className="order-1 lg:order-1"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={slideInLeft}
                        >
                            <ActivityVisual />
                        </motion.div>
                        <motion.div
                            className="order-2 lg:order-2 flex flex-col justify-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Time and Stress Reduction</span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 leading-tight">
                                Save your time and reduce financial anxiety
                            </h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                Automate tasks like budgeting, tracking, and saving, freeing up your time for more important things.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Stay on top of your budget.",
                                    "Automate your finances for less stress."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                            <Check className="w-3.5 h-3.5 text-blue-600" strokeWidth={3} />
                                        </div>
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Block 2: Financial Growth (Text Left, Image Right) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-24 items-center">
                        <motion.div
                            className="order-2 lg:order-1 flex flex-col justify-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Financial Growth</span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 leading-tight">
                                Take control of your financial future
                            </h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                Provide valuable insights into your spending habits, helping you identify areas where you can cut back and save more.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Reach your financial goals",
                                    "Make informed decisions"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                            <Check className="w-3.5 h-3.5 text-blue-600" strokeWidth={3} />
                                        </div>
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            className="order-1 lg:order-2"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={slideInRight}
                        >
                            <FinancialGrowthVisual />
                        </motion.div>
                    </div>

                    {/* Block 3: Security (Image Left, Text Right) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-24 items-center">
                        <motion.div
                            className="order-1 lg:order-1"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={slideInLeft}
                        >
                            <SecurityVisual />
                        </motion.div>
                        <motion.div
                            className="order-2 lg:order-2 flex flex-col justify-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Security and Privacy</span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 leading-tight">
                                Experience the ultimate in financial security
                            </h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                Rest easy knowing your financial data is protected by industry-leading security protocols.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "256-bit encryption",
                                    "Secure data transmission"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                            <Check className="w-3.5 h-3.5 text-blue-600" strokeWidth={3} />
                                        </div>
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
