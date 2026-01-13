"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Crown, CheckCircle2 } from 'lucide-react';

const Mission = () => {
    return (
        <section className="py-24  relative overflow-hidden">
            <div className="container-1 mx-auto">

                {/* Header Section */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-sm border mb-8  border-blue-100 bg-brand-blue-50/50 text-brand-blue "
                    >
                        <Crown className="w-4 h-4 text-brand-blue" />
                        <span className="text-sm font-medium text-brand-blue ">Our Missions</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className=" text-brand-blue-900 tracking-tight leading-[1.1]"
                    >
                        Empowering individuals to <br className="hidden md:block" />
                        achieve financial freedom <br className="hidden md:block" />
                        through intuitive and <br className="hidden md:block" />
                        <span className="text-brand-blue">personalized tools.</span>
                    </motion.h1>
                </div>

                {/* content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-200">
                            {/* Placeholder for the Meeting Image */}
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
                                alt="Team collaboration"
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </motion.div>

                    {/* Right Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col gap-8"
                    >
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                            As a leading provider of innovative finance software, we're dedicated to empowering businesses like yours to achieve their financial goals.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4 items-start group">
                                <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-brand-blue/30 group-hover:scale-110 transition-transform duration-300">
                                    <CheckCircle2 className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-brand-blue-900 mb-2">Business Growth and Efficiency</h4>
                                    <p className="text-slate-500 leading-relaxed">
                                        Empowering businesses to achieve financial excellence through innovative software solutions.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start group">
                                <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-brand-blue/30 group-hover:scale-110 transition-transform duration-300">
                                    <CheckCircle2 className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-brand-blue-900 mb-2">Technological Innovation</h4>
                                    <p className="text-slate-500 leading-relaxed">
                                        Leading the way in financial technology innovation to empower businesses.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    )
}

export default Mission