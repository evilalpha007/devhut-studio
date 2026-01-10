"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { AnimatePresence, easeIn, easeOut, motion } from "framer-motion";
import { SplashScreen } from "./SplashScreen";

export default function SplashProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [prevPath, setPrevPath] = useState(pathname);

    const [showSplash, setShowSplash] = useState(pathname === "/");

    // Derived state pattern: Check if path changed during render
    // This runs synchronously before paint, preventing the "flash" of content
    if (pathname !== prevPath) {
        setPrevPath(pathname);
        if (pathname === "/") {
            setShowSplash(true);
        }
    }

    const handleSplashComplete = () => {
        setShowSplash(false);
    };

    // No useEffect needed for the trigger anymore because we handle it above.

    return (
        <>
            <AnimatePresence>
                {showSplash && (
                    <motion.div
                        key="splash"
                        className="fixed inset-0 z-500 bg-[#0040C1] flex items-center justify-center"
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.8, ease: easeIn }}
                    >
                        <SplashScreen onComplete={handleSplashComplete} />
                    </motion.div>
                )}
            </AnimatePresence>
            {children}
        </>
    );
}
