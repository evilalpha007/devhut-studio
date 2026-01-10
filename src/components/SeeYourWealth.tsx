'use client'

import React, { useEffect, useRef } from 'react'
import { ArrowUp, BarChart3 } from 'lucide-react'
import { animate, useInView, motion } from 'framer-motion'

const Counter = ({ value, duration = 2 }: { value: number, duration?: number }) => {
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { once: true, margin: "-20%" })

    useEffect(() => {
        const node = ref.current
        if (!node || !inView) return

        const controls = animate(0, value, {
            duration,
            ease: [0.2, 0.65, 0.3, 0.9],
            onUpdate: (v) => {
                node.textContent = Math.floor(v).toString()
            }
        })

        return () => controls.stop()
    }, [value, duration, inView])

    return <span ref={ref}>0</span>
}

const SeeYourWealth = () => {
    return (
        <section className="py-24 bg-white container-1 poppins">
            <div className="flex flex-col items-center justify-center mb-6 sm:mb-20">
                <div className="flex items-center gap-2 px-5 py-1.5 rounded-full border border-blue-100 bg-brand-blue-50/50 text-brand-blue mb-8">
                    <BarChart3 className="w-4 h-4" />
                    <span className="text-sm tracking-wide">Statistics</span>
                </div>
                <motion.h1
                    className="text-center tracking-tight text-foreground leading-[1.1]"
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
                        See Your <br className="hidden md:block" />
                    </motion.span>
                    <motion.span
                        className="block text-brand-blue"
                        variants={{
                            hidden: { opacity: 0, x: -40, y: 40 },
                            visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                    >
                        Wealth Grow
                    </motion.span>
                </motion.h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 mx-auto px-4 md:px-0 mb-2 ">
                {/* Top Row */}

                {/* Card 1: Crosshair Marks */}
                <div className="hidden md:flex h-[220px] w-full rounded-[4rem] border border-blue-50 bg-white items-center justify-center relative overflow-hidden group shadow-sm transition-all duration-300 hover:border-blue-100">
                    <div className="flex gap-8 lg:gap-16 opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                        {[1, 2, 3].map((i) => (
                            <svg key={i} width="80" height="80" viewBox="0 0 100 100" fill="none" className="text-brand-blue rotate-45 group-hover: transition-transform duration-500">
                                <line x1="50" y1="0" x2="50" y2="35" stroke="currentColor" strokeWidth="1" />
                                <line x1="50" y1="65" x2="50" y2="100" stroke="currentColor" strokeWidth="1" />
                                <line x1="0" y1="50" x2="35" y2="50" stroke="currentColor" strokeWidth="1" />
                                <line x1="65" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="1" />
                            </svg>
                        ))}
                    </div>
                </div>

                {/* Card 2: 98% */}
                <div className="h-[100px] sm:h-[220px] w-full rounded-[4rem] bg-linear-to-br from-brand-surface-2 to-brand-surface-3 border border-blue-50/50 flex flex-row items-center justify-center p-6 lg:p-8 gap-4 ">
                    <div className="flex items-center gap-1 shrink-0">
                        <ArrowUp className="w-6 h-6 lg:w-8 lg:h-8 text-brand-blue" strokeWidth={2.5} />
                        <span className="text-4xl lg:text-5xl  text-brand-blue tracking-tight">
                            <Counter value={98} />%
                        </span>
                    </div>
                    <p className="text-slate-500 text-xs lg:text-sm font-medium leading-snug max-w-[120px]">
                        Transactions are processed successfully
                    </p>
                </div>

                {/* Card 3: Crosshair Marks */}
                <div className="hidden h-[220px] w-full rounded-[4rem] border border-blue-50 bg-white md:flex items-center justify-center relative overflow-hidden group shadow-sm transition-all duration-300 hover:border-blue-100">
                    <div className="flex gap-8 lg:gap-16 opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                        {[1, 2, 3].map((i) => (
                            <svg key={i} width="80" height="80" viewBox="0 0 100 100" fill="none" className="text-brand-blue rotate-45 group-hover: transition-transform duration-500">
                                <line x1="50" y1="0" x2="50" y2="35" stroke="currentColor" strokeWidth="1" />
                                <line x1="50" y1="65" x2="50" y2="100" stroke="currentColor" strokeWidth="1" />
                                <line x1="0" y1="50" x2="35" y2="50" stroke="currentColor" strokeWidth="1" />
                                <line x1="65" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="1" />
                            </svg>
                        ))}
                    </div>
                </div>

                {/* Bottom Row */}

                {/* Card 4: 10K+ */}
                <div className="h-[100px] sm:h-[220px] w-full rounded-[4rem] bg-linear-to-br from-brand-blue-200 to-white border border-brand-blue-50/50 flex flex-row items-center justify-center p-6 lg:p-8 gap-6 ">
                    <span className="text-4xl lg:text-5xl text-brand-blue tracking-tight">
                        $<Counter value={10} />K+
                    </span>
                    <p className="text-slate-500 text-xs lg:text-sm font-medium leading-snug max-w-[120px]">
                        Our users' average saving amount
                    </p>
                </div>

                {/* Card 5: large Crosshair Center */}
                <div className="hidden md:flex items-stretch justify-center h-[220px]">
                    <div className="w-[220px] h-[220px] md:w-full rounded-[4rem] border border-blue-50 bg-white flex items-center justify-center shadow-sm group hover:border-blue-100 transition-all duration-300">
                        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" className="text-blue-300 group-hover:scale-110 transition-transform duration-500">
                            <line x1="50" y1="0" x2="50" y2="40" stroke="currentColor" strokeWidth="1" />
                            <line x1="50" y1="60" x2="50" y2="100" stroke="currentColor" strokeWidth="1" />
                            <line x1="0" y1="50" x2="40" y2="50" stroke="currentColor" strokeWidth="1" />
                            <line x1="60" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="1" />
                        </svg>
                    </div>
                </div>

                {/* Card 6: 50% Blue */}
                <div className="h-[100px] sm:h-[220px] w-full rounded-[4rem] bg-linear-to-r from-brand-blue-600 to-brand-blue-400 flex flex-row items-center justify-center p-6 lg:p-8 gap-4  shadow-blue-500/20">
                    <div className="flex items-center gap-1 shrink-0">
                        <ArrowUp className="w-6 h-6 lg:w-8 lg:h-8 text-white" strokeWidth={2.5} />
                        <span className="text-4xl lg:text-5xl text-white tracking-tight">
                            <Counter value={50} />%
                        </span>
                    </div>
                    <p className="text-white text-xs lg:text-sm font-medium leading-snug max-w-[120px]">
                        Effective in financial growth than before
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SeeYourWealth
