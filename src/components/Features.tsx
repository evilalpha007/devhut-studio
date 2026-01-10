"use client";
import { motion } from 'framer-motion'
import React from 'react'
import { Crown, ShoppingCart, Send, CreditCard, Globe, Lock, Car, Home, BarChart3, TrendingUp, Download, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const Features = () => {


    return (
        <section className="py-20 md:py-32 bg-white container-1">
            <div className="flex flex-col items-center text-center mb-16 md:mb-24">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue-100 text-brand-blue text-sm font-semibold mb-6">
                    <Crown size={16} />
                    <span>Key Features</span>
                </div>
                <motion.h1
                    className="poppins tracking-tight"
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
                        Explore Our
                    </motion.span>
                    <motion.span
                        className="block text-brand-blue"
                        variants={{
                            hidden: { opacity: 0, x: -40, y: 40 },
                            visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                    >
                        Standout Features
                    </motion.span>
                </motion.h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                {/* Card 1: Expense & Income Tracking (Text Bottom) */}
                <div className="group relative overflow-hidden rounded-[2.5rem] p-6 md:p-12 h-[500px] md:h-[600px] flex flex-col justify-end md:col-span-6">
                    {/* Background Image */}
                    <Image
                        src="/image/background/bg-right.avif"
                        alt="Background"
                        fill
                        className="object-fill"
                        priority
                    />

                    {/* Visuals - Orbiting Icons */}
                    <div className="absolute inset-0 flex items-center justify-center -translate-y-8 md:-translate-y-20">
                        {/* Orbiting Icons Container */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none z-0 scale-[0.75] md:scale-100"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, margin: "-100px" }}
                        >
                            {/* Data for positions: End offsets and Control Points for Quadratic Bezier (M start Q control end) */}
                            {[
                                { Icon: ShoppingCart, x: -180, y: -120, cx: -140, cy: -150 },
                                { Icon: Send, x: 10, y: -160, cx: -40, cy: -100 },
                                { Icon: CreditCard, x: 180, y: -120, cx: 80, cy: -150 },
                                { Icon: Lock, x: 220, y: 100, cx: 160, cy: 0 },
                                { Icon: Globe, x: 0, y: 150, cx: 20, cy: 100, },
                                { Icon: TrendingUp, x: -180, y: 140, cx: 180, cy: 0 },
                            ].map((item, index) => {
                                // Bezier Calculation Helper
                                // B(t) = (1-t)^2 * P0 + 2(1-t)t * P1 + t^2 * P2
                                // P0 is (0,0) (Center relative to container center)
                                const calculateBezier = (t: number, p1: number, p2: number) => {
                                    // P0 is 0
                                    return 1 * (1 - t) * t * p1 + t * t * p2;
                                };

                                const steps = 310;
                                const xPoints = [];
                                const yPoints = [];

                                for (let i = 0; i <= steps; i++) {
                                    const t = i / steps;
                                    xPoints.push(calculateBezier(t, item.cx, item.x));
                                    yPoints.push(calculateBezier(t, item.cy, item.y));
                                }

                                const gradientId = `path-gradient-${index}`;


                                const pathVariants = {
                                    hidden: { pathLength: 0, opacity: 0 },
                                    visible: {
                                        pathLength: 1,
                                        opacity: 1,
                                        transition: { duration: 1.5, ease: "easeOut" as const, delay: 0 }
                                    }
                                };

                                const iconVariants = {
                                    hidden: { x: 0, y: 0, scale: 0, opacity: 0 },
                                    visible: {
                                        x: xPoints,
                                        y: yPoints,
                                        scale: 1,
                                        opacity: 1,
                                        transition: {
                                            duration: 1,
                                            delay: 0,
                                            ease: "easeInOut" as const,
                                        }
                                    }
                                };

                                return (
                                    <React.Fragment key={index}>
                                        {/* Draw the visual path line */}
                                        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                                            <defs>
                                                <linearGradient id={gradientId} x1="250" y1="250" x2={250 + item.x} y2={250 + item.y} gradientUnits="userSpaceOnUse">
                                                    <stop offset="0%" stopColor="var(--brand-blue-300)" stopOpacity="0" />
                                                    <stop offset="100%" stopColor="var(--brand-blue)" stopOpacity="1" />
                                                </linearGradient>
                                            </defs>
                                            <motion.path
                                                d={`M 250 250 Q ${250 + item.cx} ${250 + item.cy} ${250 + item.x} ${250 + item.y}`}
                                                fill="none"
                                                stroke={`url(#${gradientId})`}
                                                strokeWidth="3"
                                                variants={pathVariants}
                                            />
                                        </svg>

                                        {/* Animate the Icon along the calculated path */}
                                        <motion.div
                                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-4 shadow-lg z-10"
                                            variants={iconVariants}
                                        >
                                            <item.Icon className="w-5 h-5 text-brand-blue-500" />
                                        </motion.div>
                                    </React.Fragment>
                                );
                            })}
                        </motion.div>

                        {/* Central Card */}
                        <motion.div
                            initial={{ rotate: 0, scale: 0.7, opacity: 1 }}
                            whileInView={{ rotate: -5, scale: 0.9, opacity: 1 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: .8, ease: "easeInOut", delay: 0.6 }}
                            className="z-20 scale-[0.9] md:scale-100"
                        >
                            <div className="relative w-80 h-48 bg-brand-blue rounded-3xl shadow-2xl overflow-hidden ">
                                {/* Card Details */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/20 rounded-full blur-xl -ml-10 -mb-10"></div>

                                {/* Wave design on card */}
                                <div className="absolute inset-0 opacity-20">
                                    <svg viewBox="0 0 400 300" className="w-full h-full">
                                        <path d="M0,200 C150,300 250,100 400,200 L400,300 L0,300 Z" fill="white" />
                                    </svg>
                                </div>

                                <div className="p-6 h-full flex flex-col justify-between text-white relative z-10">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 bg-white/20 rounded-full"></div>
                                            <span className="font-semibold text-sm">Fizens Card</span>
                                        </div>
                                        <div className="flex gap-1">
                                            <div className="w-6 h-6 rounded-full bg-white/20"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold mb-2">$2,736.15</div>
                                        <div className="text-sm opacity-70">•••• 5318</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Text Content */}
                    <div className="relative max-w-md z-30">
                        <h3 className="text-2xl md:text-3xl font-bold text-brand-blue-900 mb-3">Expense & Income Tracking</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Record and categorize expense & income automatically or manually.
                        </p>
                    </div>
                </div>

                {/* Card 2: Smart Savings Goals (Text Top) */}
                <div className="group relative overflow-hidden rounded-[2.5rem] bg-brand-blue-100 p-6 md:p-12 h-[500px] md:h-[600px] flex flex-col md:col-span-6">


                    <Image
                        src="/image/background/bgright.avif"
                        alt="Background"
                        fill
                        className="object-fill"
                        priority
                    />
                    <div className="relative z-10 max-w-md mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-brand-blue-900 mb-3">Smart Savings Goals</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Set specific savings goals and track progress towards them.
                        </p>
                    </div>

                    {/* Visuals - Goal Cards Stack */}
                    <div className="flex flex-col scale-95 md:scale-100 origin-top">
                        {/* Card 1 (Main) */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="w-full bg-white p-5 rounded-[2rem] flex items-center justify-between shadow-xl z-30 border border-blue-100"
                        >
                            <div className="flex  items-center gap-4">
                                <div className="w-14 h-14 rounded-[1.2rem] bg-brand-blue-400 flex items-center justify-center">
                                    <Car className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <div className="font-bold text-brand-blue-900 text-xl">Buying Car</div>
                                    <div className="text-xs text-gray-400">10.02.2024</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="font-bold text-brand-blue text-xl">$13,500</div>
                                <div className="text-sm text-green-500 font-bold">+$1,500</div>
                            </div>
                        </motion.div>

                        {/* Card 2 (Middle) */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="w-full bg-blue-50 p-4 rounded-[2rem] flex items-center justify-between shadow-md scale-95 z-20"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-blue-200 flex items-center justify-center">
                                    <Home className="w-6 h-6 text-brand-blue" />
                                </div>
                                <div>
                                    <div className="font-bold text-brand-blue-900">House Savings</div>
                                    <div className="text-xs text-gray-400">10.02.2024</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="font-bold text-brand-blue text-lg">$237,000</div>
                                <div className="text-xs text-green-500 font-medium">+14,000</div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="w-full bg-brand-blue-300 p-4 rounded-[2rem] flex items-center justify-between shadow-sm scale-90 z-10"
                        >
                            <div className="flex items-center gap-4 opacity-50">
                                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                                    <ShoppingCart className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="font-bold text-brand-blue-900">New Laptop</div>
                                    <div className="text-xs text-brand-blue-900/60">12.11.2024</div>
                                </div>
                            </div>
                            <div className="text-right opacity-50">
                                <div className="font-bold text-brand-blue">$1,200</div>
                                <div className="text-xs text-white">+$200</div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Card 3: Financial Analytics (Text Top) */}
                <div className="group relative overflow-hidden rounded-[2.5rem] bg-brand-surface p-6 md:p-12 h-[300px] md:h-[400px] flex flex-col md:col-span-7">
                    <Image
                        src="/image/background/bg-left.avif"
                        alt="Background"
                        fill
                        className="object-fill"
                        priority
                    />
                    <div className="relative z-10 max-w-md mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-brand-blue-900 mb-3">Financial Analytics</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Generate reports and visualizations to analyze spending habits.
                        </p>
                    </div>

                    {/* Visuals - Phone and Floating Card */}
                    <div className="absolute bottom-0 right-0 w-full h-[400px]">
                        {/* Phone Mockup (Back) */}
                        <div className="absolute bottom-[-40px] right-[-20px] md:right-0 w-[280px] h-[450px] bg-white border-8 border-gray-900 rounded-[3rem] shadow-2xl -rotate-12 z-10 overflow-hidden transform group-hover:rotate-[-10deg] transition-all duration-500 scale-[0.75] md:scale-100 origin-bottom-right">
                            <div className="bg-white h-full w-full flex flex-col">
                                <div className="h-6 bg-gray-900 w-32 rounded-b-xl mx-auto mb-2"></div>
                                <div className="flex-1 p-4 bg-gray-50">
                                    <div className="text-center mt-4 mb-6">
                                        <div className="text-lg font-bold text-brand-blue-900">Your Stats</div>
                                    </div>
                                    <div className="flex justify-between gap-2 mb-6">
                                        {['Daily', 'Weekly', 'Monthly'].map((t, i) => (
                                            <div key={t} className={`px-2 py-1 rounded-lg text-xs font-medium ${i === 1 ? 'bg-brand-blue text-white' : 'bg-white text-gray-500'}`}>{t}</div>
                                        ))}
                                    </div>
                                    {/* Fake stats content */}
                                    <div className="space-y-3">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="h-12 bg-white rounded-xl shadow-sm w-full"></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Chart Card (Front) */}
                        <div className="absolute bottom-8 right-[30px] md:right-[140px] w-[320px] h-[220px] bg-brand-blue-500 bg-linear-to-br from-brand-blue-400 to-brand-blue-500 rounded-[2rem] shadow-2xl z-20 -rotate-5 p-5 text-white flex flex-col transform group-hover:scale-105 transition-all duration-500 border border-white/20 backdrop-blur-md scale-[0.75] md:scale-100 origin-bottom-right">
                            <div className="flex justify-between items-center mb-4">
                                <div className="font-bold text-lg">Report Expense</div>
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                    <BarChart3 size={16} />
                                </div>
                            </div>

                            {/* Chart */}
                            <div className="flex-1 relative flex items-end justify-between gap-2 px-2 pb-2">
                                {/* Smooth curve visualization (simplified with bars for now, could be svg) */}
                                <svg className="absolute bottom-0 left-0 w-full h-24 overflow-visible" preserveAspectRatio="none">
                                    <path d="M0,80 C40,70 60,30 100,50 C140,70 160,20 200,40 C240,60 260,10 300,30 L300,100 L0,100 Z" fill="rgba(255,255,255,0.2)" />
                                    <path d="M0,80 C40,70 60,30 100,50 C140,70 160,20 200,40 C240,60 260,10 300,30" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" />
                                    {/* Dot on line */}
                                    <circle cx="200" cy="40" r="4" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 4: Get The App (Text Bottom) */}
                <div className="group relative overflow-hidden rounded-[2.5rem] bg-brand-blue p-6 md:p-12 h-[300px] md:h-[400px] flex flex-col justify-end md:col-span-5">
                    {/* Visuals - Abstract Shapes */}
                    <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
                        {/* Custom Abstract Logo Shape */}
                        <div className="absolute top-10 right-10 md:top-16 md:right-16 w-64 h-64 opacity-90 scale-[0.8] md:scale-100 origin-top-right">
                            {/* Two curved L shapes interacting */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-tr-[3rem] rounded-bl-[3rem] transform translate-y-4"></div>
                            <div className="absolute top-8 right-8 w-32 h-32 bg-white/20 rounded-tr-[3rem] rounded-bl-[3rem] backdrop-blur-sm -z-10"></div>

                            <div className="absolute top-16 right-16 w-32 h-32 bg-white rounded-tr-[3rem] rounded-bl-[3rem] transform rotate-90"></div>
                        </div>

                        {/* Background Grid Pattern */}
                        <div className="absolute inset-0 opacity-10"
                            style={{
                                backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                                backgroundSize: '40px 40px'
                            }}>
                        </div>
                    </div>

                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Get the app</h3>
                        <button className="bg-white text-brand-blue h-14 px-8 rounded-full font-bold text-lg inline-flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-lg">
                            <span>Get the template</span>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Features