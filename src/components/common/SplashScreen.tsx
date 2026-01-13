"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
    const [progress, setProgress] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Optional: Play a sound if available or desired
        // audioRef.current = new Audio("/sounds/startup.mp3");
        // audioRef.current.play().catch(() => {}); 

        const timer = setInterval(() => {
            setProgress((prev) => {
                const next = prev + Math.floor(Math.random() * 10) + 1;
                if (next >= 100) {
                    clearInterval(timer);
                    // Small delay before unmounting to show 100%
                    setTimeout(onComplete, 100);
                    return 100;
                }
                return next;
            });
        }, 40);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-black text-white bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-brand-blue via-brand-blue to-brand-blue">
            <div className="relative flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative"
                >
                    <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-linear-to-br from-white to-neutral-500">
                        DevHut
                    </h1>
                    <motion.div
                        className="absolute -inset-4 bg-white/5 blur-3xl rounded-full"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>

                {/* <div className="mt-8 w-64 h-1 bg-neutral-800 rounded-full overflow-hidden relative">
                    <motion.div
                        className="h-full bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear" }}
                    />
                </div> */}

                <motion.p
                    className="mt-4 text-sm font-light text-neutral-500 font-mono"
                >
                    INITIALIZING_SYSTEM... {progress}%
                </motion.p>
            </div>
        </div>
    );
};
