"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useRef } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

// Prevents the exiting page from updating its content immediately
function FrozenRouter(props: { children: React.ReactNode }) {
    const context = useContext(LayoutRouterContext);
    const frozen = useRef(context).current;

    return (
        <LayoutRouterContext.Provider value={frozen}>
            {props.children}
        </LayoutRouterContext.Provider>
    );
}

const getPageTitle = (path: string) => {
    if (path === "/") return "Home";
    // Remove leading slash, capitalize first letter, replace hyphens with spaces
    return path.substring(1)
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

export default function TransitionProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const pageTitle = getPageTitle(pathname);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                className="contents" // Critical: Ensures this wrapper doesn't affect layout
            >
                {/* 
                  Exit Animation Overlays
                  These run when the component is being removed (navigating AWAY).
                */}

                {/* Layer 1: Accent Color (Slides up first) */}
                <motion.div
                    style={{ zIndex: 100 }}
                    className="fixed inset-0 bg-brand-blue"
                    initial={{ y: "100%" }}
                    animate={{ y: "100%", transition: { duration: 0.1 } }} // Keep it hidden initially
                    exit={{ y: "0%" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Layer 2: Main Black Background (Slides up slightly after) */}
                <motion.div
                    style={{ zIndex: 101 }}
                    className="fixed inset-0 bg-neutral-950 flex items-center justify-center"
                    initial={{ y: "100%" }}
                    animate={{ y: "100%", transition: { duration: 0.1 } }} // Keep it hidden initially
                    exit={{ y: "0%" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                >
                    {/* Text fades in during exit */}
                    <motion.h2
                        className="text-white text-4xl md:text-6xl font-light tracking-tighter"
                        initial={{ opacity: 0, y: 20 }}
                        exit={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.4 } }}
                    >
                        {pageTitle}
                    </motion.h2>
                </motion.div>


                {/* 
                  Enter Animation Overlays
                  These run when the component is being mounted (navigating TO).
                  They start covering the screen and slide up to reveal content.
                */}

                {/* Layer 1: Main Black Background (Starts covering, slides up) */}
                <motion.div
                    style={{ zIndex: 101 }}
                    className="fixed inset-0 bg-neutral-950 flex items-center justify-center"
                    initial={{ y: "0%" }}
                    animate={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }} // Slower, dramatic easing
                    onAnimationComplete={() => {
                        if (typeof window !== "undefined") {
                            import("gsap/ScrollTrigger").then((ScrollTrigger) => {
                                ScrollTrigger.ScrollTrigger.refresh();
                            });
                        }
                    }}
                >
                    {/* Text fades out during enter */}
                    <motion.h2
                        className="text-white text-4xl md:text-6xl font-light tracking-tighter"
                        initial={{ opacity: 1, y: 0 }}
                        animate={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                    >
                        {pageTitle}
                    </motion.h2>
                </motion.div>

                {/* Layer 2: Accent Color (Slides up last) */}
                <motion.div
                    style={{ zIndex: 100 }}
                    className="fixed inset-0 bg-brand-blue"
                    initial={{ y: "0%" }}
                    animate={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
                />

                <FrozenRouter>{children}</FrozenRouter>
            </motion.div>
        </AnimatePresence>
    );
}
