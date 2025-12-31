"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Design Your Future with Precision.",
    description: "We don't just build websites; we craft digital experiences that resonate with your audience and drive growth.",
    color: "#081734",
  },
  {
    title: "Scale Your Agency with Innovation.",
    description: "Our tools and expertise are designed to simplify your workflow, allowing you to focus on what matters most.",
    color: "#1a1a1a",
  },
  {
    title: "Ready to Elevate Your Brand?",
    description: "Join us now and start transforming your vision into reality with expert support and next-gen innovation.",
    color: "#00AEEB", // Brand Primary
  },
];

export function FooterCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!containerRef.current) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${cards.length * 100}%`,
        pin: true,
        scrub: 1,
        // markers: true, // Uncomment for debugging
      },
    });

    cardsRef.current.forEach((card, index) => {
      if (index === 0) return; // First card is stay static underneath

      timeline.fromTo(
        card,
        {
          y: "100vh",
          rotate: 5,
        },
        {
          y: 0,
          rotate: 0,
          duration: 1,
          ease: "none",
        }
      );

      // Optional: scale down the previous card as the new one covers it
      if (index > 0) {
        const prevCard = cardsRef.current[index - 1];
        timeline.to(
          prevCard,
          {
            scale: 0.9 + (index * 0.02),
            opacity: 0.5,
            duration: 1,
            ease: "none",
          },
          "<" // Sync with the current card sliding in
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-background">
      <div className="relative w-full h-full max-w-[1440px] mx-auto px-4">
        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => { cardsRef.current[index] = el; }}
            style={{
              backgroundColor: card.color,
              zIndex: index + 1,
            }}
            className="absolute inset-x-4 top-[10%] bottom-[10%] rounded-[3rem] p-12 md:p-20 flex flex-col items-center justify-center text-center shadow-2xl overflow-hidden"
          >
            <div className="relative z-10 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
                <span className="text-xs font-bold text-white uppercase tracking-widest">Step {index + 1}</span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
                {card.title}
              </h2>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
                {card.description}
              </p>
              <Button 
                size="lg"
                className="rounded-full px-12 py-8 text-xl font-bold bg-white text-black hover:bg-white/90 shadow-2xl transition-all hover:scale-105 active:scale-95 pointer-events-auto"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book an Appointment
              </Button>
            </div>

            {/* Background Decorative Blobs */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-black/10 rounded-full blur-[100px] pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
}
