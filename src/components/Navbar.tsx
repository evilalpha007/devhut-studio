"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const MotionLink = motion.create(Link);

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/", active: true },
    { name: "Features", href: "/#features" },
    { name: "Test Anim", href: "/test-animation" },
    { name: "Pricing", href: "#" },
    { name: "Blog", href: "#" },
    { name: "All pages", href: "#" },
  ];

  if (!mounted) return null;

  return (
    <section className="container-1 ">
      <nav className="fixed top-0 left-0 right-0 z-150  backdrop-blur-full ">
        <div className="container-1 mx-auto px-1 py-4 flex items-center justify-between">

          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <MotionLink
              href="/"
              className="flex items-center gap-1 group"
              initial="initial"
              whileHover="hovered"
            >
              <motion.div
                variants={{
                  initial: { rotate: 0 },
                  hovered: { rotate: 360 }
                }}
                transition={{ duration: 0.6, ease: "backOut" }}
                className="relative shrink-0 overflow-hidden"
              >
                <Image
                  src="/image/logos/DEVHUTLOGO.png"
                  alt="DevHut Logo Icon"
                  width={18}
                  height={15}
                  className=" dark:invert"
                />
              </motion.div>
              <div className="flex flex-col -space-y-1">
                <div className="relative h-6 overflow-hidden flex flex-col justify-center">
                  <div className="flex">
                    {"DevHut".split("").map((l, i) => (
                      <motion.span
                        key={i}
                        variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
                        transition={{ duration: 0.3, delay: 0.02 * i }}
                        className="text-xl font-rounded text-brand-blue-800 dark:text-white leading-tight tracking-tight block"
                      >
                        {l}
                      </motion.span>
                    ))}
                  </div>
                  <div className="absolute top-0 left-0 flex h-full items-center">
                    {"DevHut".split("").map((l, i) => (
                      <motion.span
                        key={i}
                        variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
                        transition={{ duration: 0.3, delay: 0.02 * i }}
                        className="text-xl font-rounded text-brand-blue leading-tight tracking-tight block"
                      >
                        {l}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <div className="relative h-3 overflow-hidden ml-0.5 flex flex-col justify-center">
                  <div className="flex">
                    {"Media".split("").map((l, i) => (
                      <motion.span
                        key={i}
                        variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
                        transition={{ duration: 0.3, delay: 0.02 * i + 0.1 }}
                        className="text-[0.65rem] font-rounded text-brand-blue-800 dark:text-white tracking-[0.35em] uppercase leading-tight block"
                      >
                        {l}
                      </motion.span>
                    ))}
                  </div>
                  <div className="absolute top-0 left-0 flex h-full items-center">
                    {"Media".split("").map((l, i) => (
                      <motion.span
                        key={i}
                        variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
                        transition={{ duration: 0.3, delay: 0.02 * i + 0.1 }}
                        className="text-[0.65rem] font-rounded text-brand-blue tracking-[0.35em] uppercase leading-tight block"
                      >
                        {l}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </MotionLink>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-4  bg-white rounded-full p-2 ">
            {navLinks.map((link) => {
              return (
                <MotionLink
                  key={link.name}
                  href={link.href}
                  initial="initial"
                  whileHover="hovered"
                  className={`
                  group px-5 py-2 rounded-full text-base font-medium transition-all duration-300 flex items-center relative overflow-hidden
                  ${link.active
                      ? "bg-brand-blue-50 text-brand-blue shadow-sm"
                      : "text-muted-foreground hover:bg-brand-blue-50/50"
                    }
                `}
                >
                  {/* Dot Indicator */}
                  <span
                    className={`
                    h-1.5 rounded-full bg-brand-blue transition-all duration-300 ease-in-out
                    ${link.active
                        ? "w-1.5 mr-2"
                        : "w-0 mr-0 opacity-0 group-hover:w-1.5 group-hover:mr-2 group-hover:opacity-100"
                      }
                  `}
                  />

                  {/* Flipping Text (Motion) */}
                  <div
                    className="relative h-6 overflow-hidden flex flex-col items-start justify-center"
                  >
                    <div className="flex items-center">
                      {link.name.split("").map((l, i) => (
                        <motion.span
                          key={`top-${i}`}
                          variants={{
                            initial: { y: 0 },
                            hovered: { y: "-100%" }
                          }}
                          transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                            delay: 0.025 * i
                          }}
                          className="inline-block"
                        >
                          {l === " " ? "\u00A0" : l}
                        </motion.span>
                      ))}
                    </div>
                    <div className="absolute top-0 left-0 flex items-center">
                      {link.name.split("").map((l, i) => (
                        <motion.span
                          key={`bottom-${i}`}
                          variants={{
                            initial: { y: "100%" },
                            hovered: { y: 0 }
                          }}
                          transition={{
                            duration: 0.25,
                            ease: "easeInOut",
                            delay: 0.02 * i
                          }}
                          className="inline-block text-brand-blue"
                        >
                          {l === " " ? "\u00A0" : l}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </MotionLink>
              )
            })}
          </div>

          {/* Right Section - CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            {/* <Button
            className="rounded-full px-6 py-5 font-semibold bg-[#49C5F1] hover:bg-brand-blue-50/50 text-white shadow-lg shadow-blue-500/20 text-base"
          >
            Get Template
          </Button> */}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-3 rounded-full bg-brand-blue text-white hover:bg-brand-blue transition-colors shadow-lg"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu Curtain */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div

              initial={{ clipPath: "circle(0% at top right)" }}
              animate={{ clipPath: "circle(150% at top right)" }}
              exit={{ clipPath: "circle(0% at top right)" }}
              transition={{ duration: 0.8, ease: [0.42, 1, 0.36, 1] }}
              className="fixed inset-0 z-[60] bg-brand-blue m-2 rounded-xl flex flex-col p-6 lg:hidden h-[calc(100vh-4rem)]"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <MotionLink
                      href="/"
                      className="flex items-center gap-1 group"
                      initial="initial"
                      whileHover="hovered"
                    >
                      <motion.div
                        variants={{
                          initial: { rotate: 0 },
                          hovered: { rotate: 360 }
                        }}
                        transition={{ duration: 0.6, ease: "backOut" }}
                        className="relative shrink-0 overflow-hidden"
                      >
                        <Image
                          src="/image/logos/DEVHUTLOGO.png"
                          alt="DevHut Logo Icon"
                          width={18}
                          height={15}
                          className=" dark:invert"
                        />
                      </motion.div>
                      <div className="flex flex-col -space-y-1">
                        <div className="relative h-6 overflow-hidden flex flex-col justify-center">
                          <div className="flex">
                            {"DevHut".split("").map((l, i) => (
                              <motion.span
                                key={i}
                                variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
                                transition={{ duration: 0.3, delay: 0.02 * i }}
                                className="text-xl font-rounded text-white dark:text-white leading-tight tracking-tight block"
                              >
                                {l}
                              </motion.span>
                            ))}
                          </div>
                          <div className="absolute top-0 left-0 flex h-full items-center">
                            {"DevHut".split("").map((l, i) => (
                              <motion.span
                                key={i}
                                variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
                                transition={{ duration: 0.3, delay: 0.02 * i }}
                                className="text-xl font-rounded text-white dark:text-white leading-tight tracking-tight block"
                              >
                                {l}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                        <div className="relative h-3 overflow-hidden ml-0.5 flex flex-col justify-center">
                          <div className="flex">
                            {"Media".split("").map((l, i) => (
                              <motion.span
                                key={i}
                                variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
                                transition={{ duration: 0.3, delay: 0.02 * i + 0.1 }}
                                className="text-[0.65rem] font-rounded text-white dark:text-white tracking-[0.35em] uppercase leading-tight block"
                              >
                                {l}
                              </motion.span>
                            ))}
                          </div>
                          <div className="absolute top-0 left-0 flex h-full items-center">
                            {"Media".split("").map((l, i) => (
                              <motion.span
                                key={i}
                                variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
                                transition={{ duration: 0.3, delay: 0.02 * i + 0.1 }}
                                className="text-[0.65rem] font-rounded text-brand-blue tracking-[0.35em] uppercase leading-tight block"
                              >
                                {l}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </MotionLink>
                  </div>
                </div>

                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 rounded-full bg-brand-blue hover:bg-brand-blue/90 transition-colors shadow-md"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 flex flex-col items-center justify-start gap-4 pt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-medium text-white hover:text-white/80 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Footer */}
              <div className="flex flex-col items-center gap-8 pb-8">
                <div className="flex items-center gap-6">
                  <a href="#" className="p-2.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"><Facebook className="w-5 h-5" /></a>
                  <a href="#" className="p-2.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"><Instagram className="w-5 h-5" /></a>
                  <a href="#" className="p-2.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"><Twitter className="w-5 h-5" /></a>
                  <a href="#" className="p-2.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"><Linkedin className="w-5 h-5" /></a>
                </div>


              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </section>

  );
}
