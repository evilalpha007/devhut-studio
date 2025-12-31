"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sun, Moon, Menu, ChevronUp } from "lucide-react";

import { useTheme } from "next-themes";

const servicesDropdownItems = [
  { name: "Poster Design", href: "#" },
  { name: "Logo Design", href: "#" },
  { name: "Web Development", href: "#" },
  { name: "UI/UX Design", href: "#" },
  { name: "App Development", href: "#" },
  { name: "SEO & Marketing", href: "#" },
];

const mainLinks = [
  { name: "Portfolio", href: "#", id: "portfolio" },
  { name: "About", href: "#", id: "about" },
  { name: "Contact", href: "#contact", id: "contact" },
  { name: "FAQ", href: "#faq", id: "faq" },
];

export function Navbar() {
  const [activeTab, setActiveTab] = useState("services");
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const headerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!headerRef.current) return;
    const rect = headerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <motion.header
      ref={headerRef}
      onMouseMove={handleMouseMove}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-6 header-3d"
      style={{ "--x": `${mousePos.x}px`, "--y": `${mousePos.y}px` } as any}
    >
      <div className="absolute inset-0 spotlight-effect pointer-events-none opacity-30" />
      
      <nav className="glass rounded-[2rem] px-4 py-3 flex items-center justify-between w-full max-w-6xl relative overflow-visible nav-3d-track shadow-2xl border-white/5 bg-background/80 backdrop-blur-2xl">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Link href="/" className="relative h-10 w-32 items-center flex">
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.div
                  key="logo-dark"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image 
                    src="/image/logos/DEVHUT LOGO-white.png" 
                    alt="Devhut Studio" 
                    width={120} 
                    height={32} 
                    className="object-contain"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="logo-light"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image 
                    src="/image/logos/DEVHUT LOGO.png" 
                    alt="Devhut Studio" 
                    width={120} 
                    height={32} 
                    className="object-contain"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </Link>
        </div>

        {/* Dynamic Island Style Navigation */}
        <div className="hidden lg:flex items-center relative gap-1 p-1 bg-muted/50 rounded-full border border-white/5 backdrop-blur-md">
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            ref={dropdownRef}
          >
            <button
              onClick={() => {
                setActiveTab("services");
                setIsServicesOpen(!isServicesOpen);
              }}
              className={`relative px-6 py-2 text-sm font-bold transition-colors duration-500 z-10 flex items-center gap-1 ${
                activeTab === "services" ? "text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeTab === "services" && (
                <motion.div
                  layoutId="water-drop"
                  className="absolute inset-0 bg-primary rounded-full shadow-[0_0_25px_rgba(0,174,235,0.6)]"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    mass: 0.8
                  }}
                />
              )}
              <span className="relative z-20">Services</span>
              <motion.div
                animate={{ rotate: isServicesOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="relative z-20"
              >
                <ChevronUp className="w-4 h-4" />
              </motion.div>
            </button>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-56 glass rounded-2xl py-2 shadow-2xl border border-white/10 overflow-hidden backdrop-blur-xl bg-background/90"
                >
                  {servicesDropdownItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="block px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Other Links */}
          {mainLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => setActiveTab(link.id)}
              className={`relative px-6 py-2 text-sm font-bold transition-colors duration-500 z-10 ${
                activeTab === link.id ? "text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeTab === link.id && (
                <motion.div
                  layoutId="water-drop"
                  className="absolute inset-0 bg-primary rounded-full shadow-[0_0_25px_rgba(0,174,235,0.6)]"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    mass: 0.8
                  }}
                />
              )}
              <span className="relative z-20">{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle Capsule */}
          <div 
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="group relative w-14 h-8 bg-muted rounded-full p-1 cursor-pointer border border-white/5 transition-all hover:border-primary/50 overflow-hidden"
          >
            <motion.div
              animate={{ x: isDark ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-6 h-6 bg-background rounded-full flex items-center justify-center shadow-md relative z-10"
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-3 h-3 text-primary" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-3 h-3 text-yellow-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          <Button 
            className="rounded-full px-8 font-bold bg-primary hover:bg-primary/90 text-white shadow-[0_4px_20px_rgba(0,174,235,0.3)] hover:scale-105 transition-all active:scale-95 text-sm group"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Hire Us
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          {/* Mobile Menu Icon */}
          <Button variant="ghost" size="icon" className="lg:hidden rounded-full">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}
