"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Design Your Future with Precision.",
    description: "We don't just build websites; we craft digital experiences that resonate with your audience and drive growth.",
    color: "var(--brand-blue-900)",
  },
  {
    title: "Scale Your Agency with Innovation.",
    description: "Our tools and expertise are designed to simplify your workflow, allowing you to focus on what matters most.",
    // For `#1a1a1a`, I will use a new variable or valid one. Let's use `var(--brand-blue-800)` which is `#071633` (closeish) or just define `#1a1a1a` in globals as `--color-charcoal`?
    // Let's use `var(--brand-blue-800)` for now or just standard `black`. It's a "Step 2" card.
    // Let's stick to `var(--brand-blue-900)` for consistency? No, they are different steps.
    // Step 2 is `#1a1a1a`.
    // Step 3 is `#00AEEB`.
    // I'll Map:
    // 1 -> var(--brand-blue-900)
    // 2 -> var(--brand-neutral-900) (I'll add this to globals)
    color: "var(--brand-neutral-900)",
  },
  {
    title: "Ready to Elevate Your Brand?",
    description: "Join us now and start transforming your vision into reality with expert support and next-gen innovation.",
    color: "var(--sidebar-primary)", // #00AEEB
  },
];

export function FooterCTA() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!triggerRef.current) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "center center",
        end: "+=200%",
        pin: true,
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    cardsRef.current.forEach((card, index) => {
      if (!card || index === 0) return;

      timeline.fromTo(
        card,
        {
          yPercent: 120, // Start below
        },
        {
          yPercent: 0,
          duration: 1,
          ease: "none",
        }
      );

      const prevCard = cardsRef.current[index - 1];
      if (prevCard) {
        timeline.fromTo(
          prevCard,
          { scale: 1, opacity: 1 },
          { scale: 0.9, opacity: 0, duration: 1, ease: "none" },
          "<"
        );
      }
    });
  }, { scope: triggerRef });

  return (
    <section className="w-full bg-white relative">
      {/* Header Section: Scrolls naturally */}
      <div className="flex flex-col items-center justify-start sm:justify-end pb-8 px-4 z-10 bg-white relative">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-blue-100 bg-white shadow-sm mb-6">
          <Star className="w-4 h-4 text-brand-blue fill-brand-blue" />
          <span className="text-sm text-brand-blue">Benefit</span>
        </div>
        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl text-center tracking-tight leading-[1.1]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.span
            className="block text-brand-blue-900"
            variants={{
              hidden: { opacity: 0, x: -40, y: 40 },
              visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
          >
            Experience The
          </motion.span>
          <motion.span
            className="block text-brand-blue"
            variants={{
              hidden: { opacity: 0, x: -40, y: 40 },
              visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
          >
            Future of Finance
          </motion.span>
        </motion.h2>
      </div>

      {/* Cards Container: Pins at Center */}
      <div ref={triggerRef} className="w-full relative z-20 bg-white poppins">
        <div className="h-[75vh] w-full container-1 mx-auto px-4 md:px-14 relative">
          <div className="grid grid-cols-1 grid-rows-1 w-full h-full pb-8">
            {cards.map((card, index) => (
              <div
                key={index}
                ref={(el) => { cardsRef.current[index] = el; }}
                style={{
                  backgroundColor: card.color,
                  zIndex: index + 1,
                }}
                className="col-start-1 row-start-1 w-full h-full rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 flex flex-col items-center justify-center text-center shadow-2xl overflow-hidden"
              >
                <div className="max-w-4xl relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
                    <span className="text-xs text-white uppercase tracking-widest">Step {index + 1}</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl text-white mb-6 md:mb-8 tracking-tight">
                    {card.title}
                  </h2>
                  <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 md:mb-12 ">
                    {card.description}
                  </p>
                  <Button
                    size="lg"
                    className="rounded-full px-10 py-6 md:px-12 md:py-8 text-lg md:text-xl bg-white text-black hover:bg-white/90 shadow-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Book an Appointment
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
