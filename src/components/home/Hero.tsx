"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useSpring, useMotionValue, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Magnetic Button Component
function MagneticButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current?.getBoundingClientRect() || { width: 0, height: 0, left: 0, top: 0 };
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.35);
    y.set(middleY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseX, y: mouseY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const bottomSectionRef = useRef<HTMLDivElement>(null);

  // Scroll Parallax
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [700, 0], [0, 40]);

  // Mouse movement states
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!wrapperRef.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = wrapperRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const moveX = (clientX - centerX) / (width / 2);
    const moveY = (clientY - centerY) / (height / 2);

    // Translation intensity
    setOffsetX(moveX * 10);
    setOffsetY(moveY * 10);
  };

  const handleMouseLeave = () => {
    setOffsetX(0);
    setOffsetY(0);
  };

  useGSAP(() => {
    const tl = gsap.timeline().delay(2.2);

    // Entrance Animation
    tl.from(leftColRef.current, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
      .from(phoneRef.current, {
        y: 50,
        x: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
      }, "-=0.6")


    // Marquee scroll trigger
    // gsap.from(bottomSectionRef.current, {
    //   scrollTrigger: {
    //     trigger: bottomSectionRef.current,
    //     start: "top bottom-=100",
    //     toggleActions: "play none none reverse",
    //   },
    //   y: 100,
    //   opacity: 0,
    //   duration: 1,
    //   ease: "power4.out",
    // });

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className=""
    >


      <div className="container-1 ">
        <div className="relative mt-8 lg:mt-20 flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-14">

          {/* Wrapper for Left and Center - 'contents' on mobile to flatten, 'flex' on desktop to group */}
          <div className="contents lg:flex lg:flex-row lg:items-center lg:gap-0">
            {/* Left Column (Headline & CTA) */}
            <div ref={leftColRef} className="w-full lg:w-full order-1 lg:order-1 text-center lg:text-left pt-10 lg:pt-0">
              <h1 className=" tracking-tight font-normal mb-8 lg:mb-10 poppins">
                Start Managing <br />
                Your Finance <br />
                <div className="flex items-center justify-center lg:justify-start gap-4 mt-2">
                  <div className="h-[2px] w-24 bg-gray-300 hidden lg:block" />
                  <span className="text-gray-500 font-normal">With Our Tool</span>
                </div>
              </h1>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-2 justify-center lg:justify-start">
                <MagneticButton>
                  <Button
                    size="lg"
                    className="relative rounded-full pl-8 pr-2 py-8 text-lg font-semibold bg-brand-blue-50 text-brand-blue hover:bg-brand-light-hover border-none shadow-sm transition-all group overflow-visible"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    <span className="mr-4 ml-2">Get Started Free</span>
                    <div className="w-14 h-14 rounded-full bg-brand-blue flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 shadow-md">
                      <ArrowRight className="w-6 h-6 text-white transform -rotate-45" />
                    </div>
                  </Button>
                </MagneticButton>
              </div>
            </div>

            {/* Center Column - Mobile Mockup */}
            <div className="z-52 relative w-full lg:w-[44%] order-3 lg:order-2 flex justify-center items-center perspective-1000 py-2 lg:py-0 px-1 mt-4 lg:mt-0">
              <div
                className="absolute top-0 lg:top-16 left-10 lg:left-0 w-[240px] md:w-[320px] lg:w-[200px] aspect-3/5 -z-10"
              >
                <div className="" />
                <Image
                  src="/image/background/bg.svg"
                  alt="Mobile App Interface"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>

              <motion.div
                ref={wrapperRef}
                style={{ y }}
                className="relative w-full sm:bottom-0 bottom-10 pt-0 lg:pt-20 flex justify-center lg:pr-10"
              >
                <motion.div
                  ref={phoneRef}
                  animate={{ x: offsetX, y: offsetY }}
                  transition={{ type: "spring", stiffness: 35, damping: 10 }}
                  className="relative w-[280px] md:w-[320px] lg:w-[400px] aspect-8/12"
                >
                  <Image
                    src="/image/logos/phone.png"
                    alt="Mobile App Interface"
                    fill
                    className="object-contain drop-shadow-3xl"
                    priority
                  />
                </motion.div>
              </motion.div>

              <div
                className="absolute bottom-5 lg:bottom-15 right-10 lg:left-50 w-[240px] md:w-[320px] lg:w-[200px] aspect-3/5 -z-10"
              >
                <div className="" />
                <Image
                  src="/image/background/bg.svg"
                  alt="Mobile App Interface"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right Column (Social Proof & Plus) */}
          <div ref={rightColRef} className="w-full lg:w-auto order-2 lg:order-3 space-y-8 lg:space-y-12 text-center lg:text-left flex flex-col items-center lg:items-start mt-0 lg:mt-8">
            <div className="space-y-6 flex flex-col items-center lg:items-start">
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
                  <path d="M14 12H21  " />
                </svg>
              </div>
              <p className="text-base md:text-lg text-gray-600 max-w-xs leading-relaxed font-normal poppins text-center lg:text-left">
                Simplify your financial life. Our intuitive app makes managing your money effortless.
              </p>
            </div>

            <div className="pt-2 flex flex-col items-center lg:items-start gap-4">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                      {/* Placeholder for avatars */}
                      {i === 1 && <div className="absolute inset-0 bg-orange-400" />}
                      {i === 2 && <div className="absolute inset-0 bg-emerald-400" />}
                      {i === 3 && <div className="absolute inset-0 bg-brand-blue" />}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="text-4xl font-semibold tracking-tight poppins text-brand-neutral-900">2.3M+</div>
                </div>
              </div>
              <p className="text-sm text-gray-500 max-w-[200px] leading-snug poppins text-center lg:text-left">
                Trusted to use by millions users over 140 countries
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Marquee */}
        <div ref={bottomSectionRef} className="-mt-22 ">
          <div className="bg-brand-blue rounded-[2rem] p-8 md:p-20 relative overflow-hidden group shadow-none sm:shadow-2xl shadow-brand-blue/50">
            <div className="relative z-10">
              <div className="text-5xl md:text-7xl lg:text-[130px] mt-16 font-black text-white/10 tracking-tighter uppercase whitespace-nowrap select-none [mask-image:linear-gradient(to_right,transparent,white_40%,white_80%,transparent)]">
                <div className="flex gap-12 text-white animate-marquee">
                  <span>FINANCE MANAGEMENT • REVOLUTIONIZE • FINANCE MANAGEMENT • REVOLUTIONIZE • FINANCE MANAGEMENT • REVOLUTIONIZE • </span>
                  <span>FINANCE MANAGEMENT • REVOLUTIONIZE • FINANCE MANAGEMENT • REVOLUTIONIZE • FINANCE MANAGEMENT • REVOLUTIONIZE • </span>
                </div>
                <style jsx>{`
                @keyframes marquee {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); } 
                }
                .animate-marquee {
                  animation: marquee 120s linear infinite;
                  display: flex;
                  width: max-content;
                  min-width: 100%;
                }
              `}</style>
              </div>

              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent my-10 sm:my-24" />
              <div className="mt-12 text-center flex flex-col items-center">
                <h2 className=" font-medium text-white   sm:mb-10 mb-6  leading-snug poppins">
                  Partnering with top tier brands to revolutionize <br className="hidden md:block" /> financial services.
                </h2>

                <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-70">
                  {/* Logo Placeholders */}
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="flex items-center gap-2 justify-center">
                      <div className="w-6 h-6 rounded-full border-2 border-white/80 grid place-items-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-white font-semibold text-lg poppins">Logoipsum</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Background blur effects */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-400/20 rounded-full blur-[100px] pointer-events-none" />
            {/* Centered bottom glow */}
            <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-full sm:w-[90%] h-[240px] sm:h-[300px] bg-brand-purple blur-[100px] sm:blur-[100px] rounded-t-full pointer-events-none" />

          </div>
        </div>
      </div>

    </section>
  );
}
