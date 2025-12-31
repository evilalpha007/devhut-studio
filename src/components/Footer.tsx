"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Twitter, Instagram, Youtube, Github } from "lucide-react";

import { FooterCTA } from "./FooterCTA";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border mt-52">
      {/* Framer-style Stacking CTA */}
      <FooterCTA />

      <div className="container mx-auto px-4 max-w-[1440px] pt-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="inline-block relative h-10 w-32">
              <Image 
                src="/image/logos/DEVHUT LOGO-white.png" 
                alt="Devhut Studio" 
                width={120} 
                height={32} 
                className="object-contain dark:block hidden"
              />
              <Image 
                src="/image/logos/DEVHUT LOGO.png" 
                alt="Devhut Studio" 
                width={120} 
                height={32} 
                className="object-contain block dark:hidden"
              />
            </Link>
            <p className="text-muted-foreground text-lg max-w-sm leading-relaxed">
              Made remotely with 💙 and passion — <span className="text-foreground font-bold">Devhut Studio.</span>
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Youtube, Github].map((Icon, i) => (
                <Link key={i} href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all bg-card hover:bg-primary/5">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="font-bold text-lg uppercase tracking-wider text-foreground">Template Pages</h4>
            <ul className="space-y-4">
              {["Home", "About", "Portfolio", "Contact", "FAQ"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-lg">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="font-bold text-lg uppercase tracking-wider text-foreground">Social</h4>
            <ul className="space-y-4">
              {["Twitter (X)", "Instagram", "Youtube", "Framer"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-lg">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <h4 className="font-bold text-lg uppercase tracking-wider text-foreground">Subscribe Form</h4>
            <div className="flex items-center bg-card/50 rounded-full border border-border p-1.5 focus-within:border-primary/50 transition-all shadow-sm">
              <Input 
                placeholder="Enter Your Email..." 
                className="border-none bg-transparent focus-visible:ring-0 h-12 text-lg px-6 flex-1 text-foreground"
              />
              <Button className="rounded-full px-8 h-12 bg-primary hover:bg-primary/90 font-bold text-white shadow-lg shadow-primary/20 shrink-0">
                Subscribe Us
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Devhut Studio. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms & Conditions</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
