"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const featureImages = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop",
];

export function FeaturesCurved() {
  const radius = 500; // Increased radius to give space for text
  const totalImages = featureImages.length;

  return (
    <section className="relative min-h-[900px] bg-gradient-to-b from-gray-950 via-gray-900 to-black overflow-hidden flex items-center justify-center pt-20">
      {/* Semi-Circular Arch Container */}
      <div className="absolute top-20 w-full h-full flex justify-center pointer-events-none">
        <div className="relative w-[1000px] h-[1000px]">
          {featureImages.map((src, index) => {
            // Distribute images only on the top half (180 to 360 degrees)
            const startAngle = 200;
            const endAngle = 340;
            const angle = startAngle + ((endAngle - startAngle) / (totalImages - 1)) * index;
            
            return (
              <motion.div
                key={index}
                className="absolute top-1/2 left-1/2 pointer-events-auto"
                style={{
                  x: "-50%",
                  y: "-50%",
                  rotate: angle,
                }}
              >
                <motion.div
                  className="relative w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl bg-gray-900"
                  style={{
                    x: radius,
                    rotate: -angle, // Counter-rotate to keep image upright
                  }}
                  whileHover={{
                    scale: 1.2,
                    zIndex: 50,
                    borderColor: "rgba(168, 85, 247, 0.5)",
                  }}
                >
                  <Image
                    src={src}
                    alt={`Feature ${index + 1}`}
                    className="w-full h-full object-cover"
                    width={100}
                    height={100}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Center Content - Positioned below the arch top */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center mt-40 pointer-events-none">
        {/* Features Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-600/10 border border-purple-500/20 mb-8 backdrop-blur-md"
        >
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
          <span className="text-xs font-bold text-purple-300 uppercase tracking-widest">
            Features
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 max-w-4xl px-4 text-white leading-[1]"
        >
          Packed with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Innovation.</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium px-6 leading-relaxed"
        >
          Devhut is packed with cutting-edge features designed to elevate your
          agency or portfolio.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(168, 85, 247, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="pointer-events-auto px-12 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-black text-xl rounded-full transition-all shadow-xl"
        >
          Book an Appointment
        </motion.button>
      </div>

      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-600/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
}