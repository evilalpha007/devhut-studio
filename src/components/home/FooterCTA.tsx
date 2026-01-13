"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { Star, Check, ChevronDown, ArrowRight, ShieldCheck, PieChart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ActivityVisual = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden bg-blue-500 rounded-[2rem]">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Activity Card */}
      <div className="relative bg-white rounded-[2rem] p-6 w-[320px] shadow-2xl">
        <div className="flex justify-between items-center mb-8">
          <h4 className="text-xl  text-gray-900">Activity</h4>
          <div className="flex items-center gap-1 text-xs text-gray-500 border border-gray-200 rounded-lg px-2 py-1 cursor-pointer hover:bg-gray-50">
            Month <ChevronDown className="w-3 h-3" />
          </div>
        </div>

        {/* Gauge Chart */}
        <div className="relative h-32 mb-8 flex justify-center">
          <svg viewBox="0 0 200 110" className="w-48 overflow-visible">
            {/* Background Arc */}
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="25"
              strokeLinecap="round"
            />
            {/* Progress Arc (75%) */}
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="25"
              strokeLinecap="round"
              strokeDasharray="251.2" // Full arc length (PI * 80)
              strokeDashoffset="62.8" // 25% offset (251.2 * 0.25)
              className="drop-shadow-lg"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            <text x="100" y="85" textAnchor="middle" className="text-3xl  fill-gray-800">75%</text>
          </svg>
        </div>

        {/* Stats */}
        <div className="flex justify-between items-center mb-8 px-2">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-indigo-500" />
              <span className="text-xs text-gray-500">Daily payment</span>
            </div>
            <p className="text-lg  text-gray-900 ml-4">55%</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-sky-400" />
              <span className="text-xs text-gray-500">Hobby</span>
            </div>
            <p className="text-lg  text-gray-900 ml-4">20%</p>
          </div>
        </div>

        {/* Footer Button */}
        <button className="w-full py-3 px-4 border border-gray-200 rounded-xl flex items-center justify-center gap-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer">
          View all activity <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const AnalyticsVisual = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden bg-indigo-500 rounded-[2rem]">
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />
      <div className="relative bg-white rounded-[2rem] p-8 w-[320px] shadow-2xl flex flex-col items-center">
        <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
          <PieChart className="w-10 h-10 text-indigo-600" />
        </div>
        <h4 className="text-2xl  text-gray-900 mb-2">Spending Report</h4>
        <p className="text-center text-gray-500 mb-6">Your monthly overview is ready.</p>
        <div className="w-full h-2 bg-gray-100 rounded-full mb-2 overflow-hidden">
          <div className="h-full bg-indigo-500 w-[70%]" />
        </div>
        <div className="flex justify-between w-full text-xs text-gray-400">
          <span>0%</span>
          <span>70%</span>
          <span>100%</span>
        </div>
      </div>
    </div>
  );
}


const SecurityVisual = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden bg-emerald-500 rounded-[2rem]">
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.5) 0, rgba(255, 255, 255, 0.5) 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px'
        }}
      />
      <div className="relative bg-white rounded-[2rem] p-8 w-[320px] shadow-2xl flex flex-col items-center">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
          <ShieldCheck className="w-10 h-10 text-emerald-600" />
        </div>
        <h4 className="text-2xl  text-gray-900 mb-2">Secure Vault</h4>
        <p className="text-center text-gray-500 mb-6">256-bit encryption active.</p>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-medium text-emerald-600">System Protected</span>
        </div>
      </div>
    </div>
  );
}

const cards = [
  {
    label: "Time and Stress Reduction",
    title: "Save your time and reduce financial anxiety",
    description: "Automate tasks like budgeting, tracking, and saving, freeing up your time for more important things.",
    points: [
      "Stay on top of your budget.",
      "Automate your finances for less stress."
    ],
    color: "#EFF6FF", // blue-50
    labelColor: "text-blue-600",
    dotColor: "bg-blue-600",
    Visual: ActivityVisual,
  },
  {
    label: "Smart Analytics",
    title: "Real-time insights for smarter decisions",
    description: "Get detailed breakdowns of your spending habits and uncover opportunities to save more every month.",
    points: [
      "Visualize cash flow instantly.",
      "Identify unnecessary subscriptions."
    ],
    color: "#EFF6FF", // indigo-50
    labelColor: "text-indigo-600",
    dotColor: "bg-indigo-600",
    Visual: AnalyticsVisual,
  },
  {
    label: "Bank-Grade Security",
    title: "Your financial data, safe and secure",
    description: "We use state-of-the-art encryption and security protocols to ensure your data never falls into the wrong hands.",
    points: [
      "End-to-end 256-bit encryption.",
      "Biometric login support."
    ],
    color: "#EFF6FF", // emerald-50
    labelColor: "text-emerald-600",
    dotColor: "bg-emerald-600",
    Visual: SecurityVisual,
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
        end: "+=300%",
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
          yPercent: 100,
        },
        {
          yPercent: 0,
          duration: 1,
          ease: "power2.out",
        }
      );

      const prevCard = cardsRef.current[index - 1];
      if (prevCard) {
        timeline.to(
          prevCard,
          { scale: 0.95, opacity: 0, duration: 1 },
          "<"
        );
      }
    });
  }, { scope: triggerRef });

  return (
    <section className="w-full bg-white relative py-20">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-start sm:justify-end pb-12 px-4 z-10 bg-white relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-blue-50/50 shadow-sm mb-6">
          <Star className="w-4 h-4 text-brand-blue fill-brand-blue" />
          <span className="text-sm text-brand-blue font-medium">Why Choose Us</span>
        </div>
        <motion.h2
          className="text-4xl md:text-5xl lg:text-7xl text-center tracking-tight leading-[1.1] "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            className="block text-slate-900"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            Experience The
          </motion.span>
          <motion.span
            className="block text-brand-blue"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            Future of Finance
          </motion.span>
        </motion.h2>
      </div>

      {/* Cards Section */}
      <div ref={triggerRef} className="w-full relative z-20 h-[700px] md:h-[800px] bg-white">
        <div className="h-full w-full max-w-[1400px] mx-auto px-4 md:px-8 relative flex items-center justify-center">
          <div className="relative w-full h-[600px] md:h-[650px]">
            {cards.map((card, index) => (
              <div
                key={index}
                ref={(el) => { cardsRef.current[index] = el; }}
                style={{
                  backgroundColor: card.color,
                  zIndex: index + 1,
                  top: 0,
                  left: 0,
                }}
                className="absolute w-full h-full rounded-[2.5rem] md:rounded-[3.5rem] p-6 sm:p-10 md:p-16 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] overflow-hidden border border-white/80"
              >
                {/* Background Decoration */}
                <div className="absolute bottom-0 right-0 w-full h-full opacity-100 pointer-events-none z-0">
                  <Image
                    src="/image/bgsvg/bg-right.avif"
                    alt="Background Decoration"
                    fill
                    className="object-contain object-bottom-right"
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 h-full items-center relative z-10">
                  {/* Visual Column */}
                  <div className="h-[320px] lg:h-full w-full order-1 lg:order-1 lg:py-4">
                    <card.Visual />
                  </div>

                  {/* Content Column */}
                  <div className="flex flex-col justify-center text-left order-2 lg:order-2 h-full lg:py-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-2 h-2 rounded-full ${card.dotColor}`} />
                      <span className={`text-sm font-semibold tracking-wide uppercase ${card.labelColor}`}>{card.label}</span>
                    </div>
                    <h3 className=" text-slate-900 mb-6 leading-[1.15] tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
                      {card.description}
                    </p>
                    <ul className="space-y-4">
                      {card.points.map((point, i) => (
                        <li key={i} className="flex items-center gap-4">
                          <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${card.color === '#EFF6FF' ? 'bg-blue-100' : card.color === '#EEF2FF' ? 'bg-indigo-100' : 'bg-emerald-100'}`}>
                            <Check className={`w-4 h-4 ${card.labelColor}`} strokeWidth={4} />
                          </div>
                          <span className="text-slate-700 font-medium text-lg">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
