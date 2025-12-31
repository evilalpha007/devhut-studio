"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useSpring, useMotionValue } from "framer-motion";
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
  const phoneRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const bottomSectionRef = useRef<HTMLDivElement>(null);

  // Mouse tilt states
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!phoneRef.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = phoneRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const moveX = (clientX - centerX) / (width / 2);
    const moveY = (clientY - centerY) / (height / 2);
    
    // Tilt intensity
    setRotateX(-moveY * 8);
    setRotateY(moveX * 8);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  useGSAP(() => {
    const tl = gsap.timeline();

    // Entrance Animation
    tl.from(leftColRef.current, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
    .from(phoneRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
    }, "-=0.6")
    .from(rightColRef.current, {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=1");

    // Marquee scroll trigger
    gsap.from(bottomSectionRef.current, {
      scrollTrigger: {
        trigger: bottomSectionRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none reverse",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-background"
    >
      {/* Subtle Background Grid - Centered behind phone */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[600px] h-[600px] bg-grid opacity-10 pointer-events-none -z-10" />

      <div className="container px-4 mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column */}
          <div ref={leftColRef} className="lg:col-span-5 order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
              Start Managing <br />
              Your Finance <br />
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="h-[2px] w-12 bg-border mt-2 hidden lg:block" />
                <span>With Our Tool</span>
              </div>
            </h1>
            
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-4">
              <MagneticButton>
                <Button 
                  size="lg" 
                  className="rounded-full px-8 py-7 text-lg group bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <span className="mr-6">Get Started Free</span>
                  <div className="absolute right-2 w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center group-hover:bg-blue-800 transition-colors">
                    <ArrowRight className="w-5 h-5 text-white transform group-hover:-rotate-45 transition-transform duration-300" />
                  </div>
                </Button>
              </MagneticButton>
            </div>
          </div>

          {/* Center Column - Mobile Mockup with Cursor Tilt */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center perspective-1000 py-12 lg:py-0">
            <motion.div 
              ref={phoneRef}
              animate={{ rotateX, rotateY }}
              transition={{ type: "spring", stiffness: 75, damping: 15 }}
              className="relative w-[280px] md:w-[320px] lg:w-[340px] aspect-9/19 cursor-grab active:cursor-grabbing"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 bg-primary/5 rounded-[3rem] blur-2xl -z-10 transform scale-110" />
              <Image
                src="/image/logos/Gemini_Generated_Image_z1lvnhz1lvnhz1lv-removebg-preview.png"
                alt="Mobile App Interface"
                fill
                className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
                priority
              />
            </motion.div>
          </div>

          {/* Right Column */}
          <div ref={rightColRef} className="lg:col-span-3 order-3 space-y-12 text-center lg:text-left">
            <div className="space-y-6 flex flex-col items-center lg:items-start">
              <div className="w-14 h-14 rounded-2xl border border-primary/20 bg-primary/5 flex items-center justify-center group transition-colors hover:bg-primary/10">
                <Plus className="w-7 h-7 text-primary transition-transform group-hover:rotate-90" />
              </div>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xs leading-relaxed">
                Simplify your financial life. Our intuitive app makes managing your money effortless.
              </p>
            </div>

            <div className="pt-10 border-t border-border flex flex-col items-center lg:items-start gap-4">
              <div className="flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-background bg-secondary overflow-hidden ring-1 ring-border">
                      <div className="w-full h-full bg-linear-to-br from-primary/30 to-primary/5" />
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="text-3xl font-bold tracking-tight">2.3M+</div>
                  <div className="text-xs text-muted-foreground font-semibold uppercase tracking-widest leading-none mt-1">Trusted users globally</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground/60 max-w-[200px]">
                Trusted to use by millions users over 140 countries
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Marquee */}
        <div ref={bottomSectionRef} className="mt-24 lg:mt-32">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden group shadow-2xl shadow-primary/30">
            <div className="relative z-10">
              <div className="text-5xl md:text-7xl lg:text-8xl font-black text-white/10 tracking-tighter uppercase whitespace-nowrap select-none">
                <motion.div 
                  animate={{ x: [0, -1000] }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="flex gap-12 text-white/60"
                >
                  <span>FINANCE MANAGEMENT • REVOLUTIONIZE • FINANCE MANAGEMENT • REVOLUTIONIZE • FINANCE MANAGEMENT • REVOLUTIONIZE • </span>
                </motion.div>
              </div>
              
              <div className="mt-12 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Partnering with top tier brands</h2>
                <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto font-medium">
                  We are building the future of financial management, one transaction at a time. Join the revolution.
                </p>
              </div>
            </div>

            {/* Background blur effects */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-400/20 rounded-full blur-[100px] pointer-events-none" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
