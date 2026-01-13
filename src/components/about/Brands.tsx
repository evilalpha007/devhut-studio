"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Logo1 = () => (
    <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <path d="M15 20C15 28.2843 8.28427 35 0 35V5C8.28427 5 15 11.7157 15 20Z" fill="currentColor" fillOpacity="0.4" />
        <rect x="20" y="5" width="10" height="30" rx="5" fill="currentColor" fillOpacity="0.6" />
        <text x="40" y="26" fill="currentColor" fontFamily="sans-serif" fontWeight="bold" fontSize="18">Logoipsum</text>
    </svg>
);

const Logo2 = () => (
    <svg width="150" height="40" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="4" strokeOpacity="0.4" />
        <circle cx="20" cy="20" r="5" fill="currentColor" fillOpacity="0.6" />
        <text x="45" y="26" fill="currentColor" fontFamily="sans-serif" fontWeight="bold" fontSize="18">Logoipsum</text>
    </svg>
);

const Logo3 = () => (
    <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <path d="M0 26L10 5H18L28 26H20L18 20H10L8 26H0ZM12 16H16L14 10L12 16Z" fill="currentColor" fillOpacity="0.6" />
        <text x="35" y="26" fill="currentColor" fontFamily="sans-serif" fontWeight="bold" fontSize="18">IPSUM</text>
    </svg>
);

const Logo4 = () => (
    <svg width="160" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <path d="M10 20L20 5H30L20 20L30 35H20L10 20Z" fill="currentColor" fillOpacity="0.4" />
        <path d="M20 20L10 5H0L10 20L0 35H10L20 20Z" fill="currentColor" fillOpacity="0.6" />
        <text x="40" y="26" fill="currentColor" fontFamily="sans-serif" fontWeight="bold" fontSize="18">logo ipsum</text>
    </svg>
);

const Logo5 = () => (
    <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <rect x="0" y="10" width="20" height="20" rx="4" transform="rotate(45 10 20)" fill="currentColor" fillOpacity="0.4" />
        <text x="35" y="26" fill="currentColor" fontFamily="sans-serif" fontWeight="bold" fontSize="18">Logoipsum</text>
    </svg>
);

const brands = [Logo1, Logo2, Logo3, Logo4, Logo5];

const Brands = () => {
    return (
        <section className="py-16 border-b border-blue-500/10 bg-background overflow-hidden">
            <div className="container mx-auto px-4">
                <h3 className="text-center text-muted-foreground font-medium mb-12 text-sm tracking-wide">
                    Trusted by top-tier brands
                </h3>

                <div className="relative flex mask-gradient w-full overflow-hidden">
                    <div className="absolute top-0 left-0 w-32 h-full z-10 bg-gradient-to-r from-background to-transparent" />
                    <div className="absolute top-0 right-0 w-32 h-full z-10 bg-gradient-to-l from-background to-transparent" />
                    <motion.div
                        className="flex items-center gap-12 md:gap-20 whitespace-nowrap"
                        animate={{
                            x: [0, -1000],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 25,
                                ease: "linear",
                            },
                        }}
                    >
                        {/* Render logos 4 times to ensure smooth infinite loop on large screens */}
                        {[...Array(4)].map((_, i) => (
                            <React.Fragment key={i}>
                                {brands.map((Logo, index) => (
                                    <div key={index} className="opacity-60 text-muted-foreground transition-opacity hover:opacity-100 min-w-max">
                                        <Logo />
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Brands;
