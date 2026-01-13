"use client";
import React, { useRef } from 'react'
import Image from 'next/image'
import { PieChart, Banknote, TrendingUp, Receipt, FileText, Plus } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

const AdditionalFeature = () => {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Animate text outwards from the center
    // Left text (VARIED) moves left, Right text (FEATURES) moves right
    const xLeft = useTransform(scrollYProgress, [0, 0.5], ["50%", "0%"]);
    const xRight = useTransform(scrollYProgress, [0, 0.5], ["-50%", "0%"]);
    const opacity = useTransform(scrollYProgress, [0, 1.3, 1.8, 2], [0, 0.50, 0.1, 0]);

    const featuresTop = [
        {
            title: "Budgeting",
            desc: "Track budgets for different categories.",
            icon: PieChart,
            color: "text-blue-500",
            bg: "bg-blue-50",
            iconBg: "bg-blue-100"
        },
        {
            title: "Debt Management",
            desc: "Track debt balances, interest rates.",
            icon: Banknote,
            color: "text-blue-500",
            bg: "bg-blue-50",
            iconBg: "bg-blue-100"
        },
        {
            title: "Investment Tracking",
            desc: "Track investments, including stocks.",
            icon: TrendingUp,
            color: "text-cyan-500",
            bg: "bg-cyan-50",
            iconBg: "bg-cyan-100"
        }
    ];

    const featuresBottom = [
        {
            title: "Bill Payment",
            desc: "Pay bills directly through the app.",
            icon: Receipt,
            color: "text-pink-500",
            bg: "bg-pink-50",
            iconBg: "bg-pink-100"
        },
        {
            title: "Tax Preparation",
            desc: "Get assistance with tax preparation.",
            icon: FileText,
            color: "text-emerald-500",
            bg: "bg-emerald-50",
            iconBg: "bg-emerald-100"
        }
    ];

    const FeatureCard = ({ item }: { item: any }) => (
        <div className="bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-gray-100 flex items-center gap-4 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 w-full md:w-auto md:min-w-[300px]">
            <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
            </div>
            <div>
                <div className=" text-brand-blue-900 font-medium text-sm">{item.title}</div>
                <div className="text-xs text-gray-500 mt-1 max-w-[150px] leading-relaxed">{item.desc}</div>
            </div>
        </div>
    );

    return (
        <section ref={containerRef} className="container poppins mx-auto  py-6 sm:py-24 relative bg-white overflow-hidden">
            {/* Background Text */}
            <motion.div
                style={{ opacity }}
                className="absolute top-[63%] sm:top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-between items-center px-4 md:px-10 pointer-events-none select-none z-0"
            >
                <motion.span
                    style={{ x: xLeft }}
                    className="text-[6rem] md:text-[8rem] font- text-brand-blue-600 -translate-y-12 md:-translate-y-24"
                >
                    VARIED
                </motion.span>
                <motion.span
                    style={{ x: xRight }}
                    className="text-[6rem] md:text-[8rem] font- text-brand-blue-600 translate-y-12 md:translate-y-24"
                >
                    FEATURES
                </motion.span>
            </motion.div>

            <div className="container-1 mx-auto px-4 relative z-10">
                <motion.h2
                    className="text-3xl md:text-5xl text-center mb-16 text-brand-blue-900"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                >
                    <motion.span
                        className="block"
                        variants={{
                            hidden: { opacity: 0, x: -40, y: 40 },
                            visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                    >
                        ...and more additional features
                    </motion.span>
                </motion.h2>

                <div className="flex flex-col items-center gap-6 mb-20">
                    <div className="flex flex-wrap justify-center gap-6">
                        {featuresTop.map((item, idx) => <FeatureCard key={idx} item={item} />)}
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {featuresBottom.map((item, idx) => <FeatureCard key={idx} item={item} />)}
                    </div>
                </div>

                {/* Central Phone Graphic */}
                <div className="relative mx-auto w-[340px] md:w-[360px] h-[500px] sm:h-[720px]">


                    {/* Screen content positioned inside the frame */}
                    {/* Adjust inset values to match the specific bezel of side.avif */}
                    <div className="absolute top-[20] sm:top-[18px] left-[20px] right-[20px] bottom-[18px] rounded-[2.5rem] overflow-hidden bg-secondary z-10 flex flex-col">
                        {/* Status Bar */}
                        <div className="h-12 flex justify-between items-end px-6 pb-2 z-20 relative">
                            <span className="text-[10px] font-semibold text-black ml-2">9:41</span>
                            <div className="flex gap-1.5 mr-2">
                                <div className="w-[3px] h-2.5 bg-black rounded-full"></div>
                                <div className="w-[3px] h-2.5 bg-black rounded-full"></div>
                                <div className="w-4 h-2.5 border border-black rounded-[4px] relative">
                                    <div className="absolute top-0.5 right-0.5 bottom-0.5 left-0.5 bg-black rounded-[2px]"></div>
                                </div>
                            </div>
                        </div>

                        {/* App Content */}
                        <div className="p-6 relative z-10">
                            {/* User User */}


                            <div className="flex justify-between items-center mb-8">
                                <div>
                                    <div className="text-gray-500 text-sm mb-0.5">Good morning,</div>
                                    <div className="text-2xl  text-brand-blue-900">James Lee</div>
                                </div>
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=James" alt="avatar" className="w-full h-full bg-slate-100" />
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex justify-between items-center mb-8">
                                <div className="flex bg-white rounded-full p-1 shadow-sm">
                                    <button className="bg-brand-blue text-white text-xs font-semibold px-4 py-2 rounded-full shadow-sm">USD</button>
                                    <button className="text-gray-500 text-xs font-semibold px-4 py-2 rounded-full hover:bg-gray-50 transition-colors">IDR</button>
                                </div>
                                <button className="text-brand-blue text-sm font-semibold flex items-center gap-1.5 hover:bg-blue-50 px-3 py-1.5 rounded-full transition-colors">
                                    <Plus className="w-4 h-4" />
                                    Add Currency
                                </button>
                            </div>

                            {/* Card UI */}
                            <div className="relative w-full aspect-[1.58] rounded-3xl overflow-hidden shadow-2xl p-6 text-white flex flex-col justify-between group">
                                {/* Card Background Gradient */}
                                <div className="absolute inset-0 bg-linear-to-br from-brand-blue-400 via-brand-blue-600 to-brand-blue-800"></div>

                                {/* Glass/Blur Effects matching image */}
                                <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-blue-400 rounded-full mix-blend-overlay opacity-40 blur-3xl"></div>
                                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-blue-300 rounded-full mix-blend-overlay opacity-30 blur-3xl"></div>
                                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent opacity-50"></div>

                                <div className="relative z-10 flex justify-between items-start">
                                    <div className="flex items-center gap-2">
                                        {/* Abstract Logo */}
                                        <div className="w-5 h-5 relative">
                                            <div className="absolute top-0 left-0 w-2.5 h-full bg-white rounded-l-full transform -skew-x-12 opacity-90"></div>
                                            <div className="absolute top-0 right-0 w-2.5 h-full bg-white/70 rounded-r-full transform -skew-x-12"></div>
                                        </div>
                                        <span className="font-semibold text-sm tracking-wide">Fizen Card</span>
                                    </div>
                                    {/* Mastercard/Visa Circles */}
                                    <div className="flex -space-x-2 opacity-90">
                                        <div className="w-6 h-6 rounded-full bg-white/30 backdrop-blur-md"></div>
                                        <div className="w-6 h-6 rounded-full bg-white/30 backdrop-blur-md"></div>
                                    </div>
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="text-3xl  tracking-tight">$2,736.15</div>
                                        {/* Eye/NFC icon placeholder */}
                                        <div className="opacity-60 cursor-pointer hover:opacity-100 transition-opacity">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm opacity-80 font-medium tracking-widest">
                                        <div className="flex gap-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                                            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                                            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                                            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                                        </div>
                                        <span className="ml-1">5318</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Smooth Fade Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/90 to-transparent z-20 pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdditionalFeature