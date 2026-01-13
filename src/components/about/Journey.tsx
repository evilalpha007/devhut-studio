"use client";
import React from "react";
import { motion } from "framer-motion";

const Journey = () => {
    // Animation variants from FinanceSolution
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
    };

    const textVariant = {
        hidden: { opacity: 0, x: -40, y: 40 },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" as const }
        }
    };

    const imageItems = [
        {
            src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
            className: "w-[280px] md:w-[320px] h-[350px] md:h-[420px]" // Tall
        },
        {
            src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop",
            className: "w-[300px] md:w-[400px] h-[280px] md:h-[320px]" // Wide
        },
        {
            src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
            className: "w-[280px] md:w-[300px] h-[300px] md:h-[300px]" // Square
        },
        {
            src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
            className: "w-[300px] md:w-[350px] h-[380px] md:h-[480px]" // Tall Large
        },
        {
            src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
            className: "w-[320px] md:w-[450px] h-[300px] md:h-[360px]" // Wide Large
        },
        {
            src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
            className: "w-[280px] md:w-[320px] h-[320px] md:h-[380px]" // Medium
        }
    ];

    // Duplicate images for infinite loop
    const marqueeItems = [...imageItems, ...imageItems];

    return (
        <section className="py-24 bg-white overflow-hidden" id="journey">
            <div className="container mx-auto px-4 text-center mb-16">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-6 tracking-tight"
                        variants={{
                            visible: { transition: { staggerChildren: 0.2 } }
                        }}
                    >
                        <motion.span className="inline-block" variants={textVariant}>
                            The Fizens
                        </motion.span>{" "}
                        <motion.span className="inline-block text-brand-blue font-medium" variants={textVariant}>
                            Journey
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

                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                        From vision to value — discover how Fizens empowers you to take control of your financial future.
                    </p>
                </motion.div>
            </div>

            <div className="relative w-full overflow-hidden py-8">
                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>

                <motion.div
                    className="flex gap-8 w-max items-center"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {marqueeItems.map((item, index) => (
                        <div
                            key={index}
                            className={`shrink-0 rounded-[2rem] overflow-hidden shadow-sm ${item.className}`}
                        >
                            <img
                                src={item.src}
                                alt={`Journey ${index}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Journey