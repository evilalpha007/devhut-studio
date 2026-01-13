import React from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative w-full py-24 md:py-32 flex flex-col items-center justify-center bg-white overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.4]"
                style={{
                    backgroundImage: `linear-gradient(to right, #f0f0f0 1px, transparent 1px),
          linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)`,
                    backgroundSize: '4rem 4rem',
                    maskImage: 'radial-gradient(ellipse at center, transparent 20%, black 70%)'
                }}
            />

            <div className="container-1 px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
                {/* Main Heading */}
                <h1 className="tracking-tight text-black max-w-5xl mb-8 leading-[1.1]">
                    Modern <span className="text-brand-blue">Financial SaaS</span>
                    <br className="hidden md:block" /> Template for Framer
                </h1>

                {/* Plus Separator */}
                <div className="my-8 text-brand-blue">

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
                </div>

                {/* Description */}
                <p className=" text-gray-600 mb-2 leading-relaxed max-w-4xl ">
                    Our SaaS website template offers a sleek and modern design, combined with smooth animations and interactive elements to engage your visitors.
                </p>

                {/* Custom CTA Button */}
                <button className="group flex items-center justify-between pl-8 pr-2 py-2 rounded-full bg-brand-blue-50 hover:bg-brand-blue-100 transition-all duration-300 cursor-pointer">
                    <span className="text-brand-blue font-semibold text-lg mr-4">
                        Buy the template
                    </span>
                    <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <ArrowUpRight className="w-6 h-6 text-white" />
                    </div>
                </button>
            </div>
        </section>
    );
};

export default Hero;
