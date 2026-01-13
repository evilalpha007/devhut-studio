import React from 'react';
import { Crown } from 'lucide-react';
import Image from 'next/image';

// Figma Logo SVG Component
const FigmaLogo = () => (
    <svg width="60" height="90" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-20 md:h-20">
        <path d="M9.5 28.5C4.25329 28.5 0 24.2467 0 19C0 13.7533 4.25329 9.5 9.5 9.5H19V28.5H9.5Z" fill="#F24E1E" />
        <path d="M9.5 57C4.25329 57 0 52.7467 0 47.5C0 42.2533 4.25329 38 9.5 38H19V57H9.5Z" fill="#0ACF83" />
        <path d="M28.5 28.5H19V47.5H28.5C33.7467 47.5 38 43.2533 38 38C38 32.7467 33.7467 28.5 28.5 28.5Z" fill="#1ABCFE" />
        <path d="M19 0H28.5C33.7467 0 38 4.25329 38 9.5C38 14.7467 33.7467 19 28.5 19H19V0Z" fill="#FF7262" />
        <path d="M9.5 28.5H19V9.5H9.5C4.25329 9.5 0 13.7533 0 19C0 24.2467 4.25329 28.5 9.5 28.5Z" fill="#A259FF" />
    </svg>
);

// Use a white version for the blue card
const FigmaLogoWhite = () => (
    <svg width="60" height="90" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-20 md:h-20 opacity-90">
        <path d="M9.5 28.5C4.25329 28.5 0 24.2467 0 19C0 13.7533 4.25329 9.5 9.5 9.5H19V28.5H9.5Z" fill="white" />
        <path d="M9.5 57C4.25329 57 0 52.7467 0 47.5C0 42.2533 4.25329 38 9.5 38H19V57H9.5Z" fill="white" />
        <path d="M28.5 28.5H19V47.5H28.5C33.7467 47.5 38 43.2533 38 38C38 32.7467 33.7467 28.5 28.5 28.5Z" fill="white" />
        <path d="M19 0H28.5C33.7467 0 38 4.25329 38 9.5C38 14.7467 33.7467 19 28.5 19H19V0Z" fill="white" />
        <path d="M9.5 28.5H19V9.5H9.5C4.25329 9.5 0 13.7533 0 19C0 24.2467 4.25329 28.5 9.5 28.5Z" fill="white" />
    </svg>
);

const WhatIncluded = () => {
    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="container-1 px-4 md:px-6 mx-auto">
                <div className="text-center mb-16 flex flex-col items-center">
                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue-200 bg-brand-blue-50 text-brand-blue mb-6 ">
                        <Crown className="w-4 h-4" />
                        <span className="text-sm font-medium">Including</span>
                    </div>
                    <h1 className="tracking-tight leading-tight">
                        What's included in <br />
                        <span className="text-brand-blue">Fizens Template?</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-7xl mx-auto">
                    {/* Card 1: Stunning Home Page */}
                    <div className="bg-brand-surface rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden h-[500px] group border border-brand-blue-50/50 hover:border-brand-blue-100 transition-colors">
                        <div className="relative z-10 max-w-xs">
                            <h3 className="text-3xl md:text-4xl font-semibold text-brand-blue mb-2">Stunning</h3>
                            <h3 className="text-3xl md:text-4xl font-semibold text-brand-blue mb-4">Home page</h3>
                            <p className="text-gray-500 leading-relaxed text-lg">
                                Fizens has 01 home page with modern design and multiple creative layouts
                            </p>
                        </div>
                        <div className="absolute right-[-20%] top-[15%] md:right-[-10%] md:top-[12%] w-[70%] h-full transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2">
                            {/* Use generated asset */}
                            <Image
                                src="/image/home_page_mockup.png"
                                alt="Home Page Mockup"
                                width={600}
                                height={800}
                                className="object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Card 2: 15+ Sections */}
                    <div className="bg-brand-surface rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden h-[500px] group border border-brand-blue-50/50 hover:border-brand-blue-100 transition-colors">
                        <div className="absolute right-[-5%] top-[-10%] w-[90%] h-[70%] transition-transform duration-500 group-hover:translate-y-2">
                            <Image
                                src="/image/ui_sections_mockup.png"
                                alt="Sections Mockup"
                                width={700}
                                height={600}
                                className="object-contain drop-shadow-xl opacity-90"
                            />
                        </div>
                        <div className="relative z-10 mt-[260px] max-w-sm">
                            <h3 className="text-3xl md:text-4xl font-semibold text-brand-blue mb-4">15+ Sections</h3>
                            <p className="text-gray-500 leading-relaxed text-lg">
                                15+ Creative designed sections for many purpose of using
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Multiple Inner Pages */}
                    <div className="bg-brand-surface rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden h-[500px] group border border-brand-blue-50/50 hover:border-brand-blue-100 transition-colors">
                        <div className="relative z-10 max-w-xs">
                            <h3 className="text-3xl md:text-4xl font-semibold text-brand-blue mb-2">Multiple</h3>
                            <h3 className="text-3xl md:text-4xl font-semibold text-brand-blue mb-4">Inner Pages</h3>
                            <p className="text-gray-500 leading-relaxed text-lg">
                                Ready to use pages to launch your website fast
                            </p>
                        </div>
                        <div className="absolute right-[-25%] bottom-[-10%] w-[80%] h-full transition-transform duration-700 group-hover:translate-x-4">
                            <Image
                                src="/image/inner_pages_collage.png"
                                alt="Inner Pages Mockup"
                                width={600}
                                height={900}
                                className="object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Card 4: Figma File Access */}
                    <div className="rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden h-[500px] flex flex-col items-center justify-center text-center bg-gradient-to-b from-brand-blue-400 to-brand-blue-600 text-white">
                        <div className="mb-6 scale-90 md:scale-100">
                            <FigmaLogoWhite />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">Figma File Access</h3>
                        <p className="text-white/90 text-lg max-w-md mb-8 leading-relaxed">
                            You will get the Figma File after purchased <span className="font-bold">PRO License + Figma File.</span> If you face in any trouble about the PRO License and Figma file, feel free to shoot us an email at <span className="font-bold">kota.design96@gmail.com.</span> We are happy to help.
                        </p>
                        <button className="bg-white text-brand-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                            Get Figma File
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatIncluded;
