import React from 'react';
import { MousePointer2 } from 'lucide-react';

const PurchaseCTA = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="relative rounded-[2.5rem] bg-gradient-to-br from-brand-blue-400 to-brand-blue px-6 py-20 text-center text-white overflow-hidden shadow-2xl shadow-brand-blue-200">

                    {/* Background Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/20 blur-[100px] rounded-full pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center">
                        {/* Logo */}
                        <div className="flex items-center gap-2 mb-8 opacity-90">
                            <div className="w-8 h-8 md:w-10 md:h-10">
                                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                    <path d="M20 0L40 20L20 40L0 20L20 0Z" fill="white" fillOpacity="0.3" />
                                    <path d="M20 10L30 20L20 30L10 20L20 10Z" fill="white" />
                                </svg>
                            </div>
                            <span className="text-2xl md:text-3xl font-bold tracking-tight">fizens</span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Purchase Fizens Today!</h2>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-blue-50 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                            Our SaaS website template offers a sleek and modern design, combined with smooth animations and interactive elements to engage your visitors.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <button className="bg-white text-brand-blue px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 min-w-[180px]">
                                Purchase Now
                            </button>
                            <button className="bg-transparent border border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 min-w-[180px]">
                                More Template
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PurchaseCTA;
