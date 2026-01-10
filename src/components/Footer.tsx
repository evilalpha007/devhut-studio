"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border  sm:my-2">
      <div className="container-1 mx-auto px-4  pt-16 pb-8">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-20">

          {/* Left: Logo & Newsletter */}
          <div className="lg:w-[40%] space-y-8">
            <Link href="/" className="inline-block relative h-10 w-fit">
              <Image
                src="/image/logos/DEVHUT LOGO (1).svg"
                alt="Devhut Studio"
                width={140}
                height={40}
                className="object-contain dark:block hidden"
              />
              <Image
                src="/image/logos/DEVHUT LOGO (1).svg"
                alt="Devhut Studio"
                width={140}
                height={40}
                className="object-contain block dark:hidden"
              />
            </Link>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-foreground">Subscribe for our newsletter</h3>
              <div className="flex items-center gap-2 max-w-md">
                <div className="relative flex-1">
                  <Input
                    placeholder="Enter your email"
                    className="w-full h-12 rounded-full border-border bg-transparent pr-4 pl-6 text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-primary"
                  />
                </div>
                <Button className="h-12 px-8 rounded-full bg-brand-blue hover:bg-brand-blue/90 text-white font-medium">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Links Columns */}
          <div className="lg:w-[60%] grid grid-cols-3 sm:grid-cols-3 gap-8 text-sm">
            {/* Column 1 */}
            <div className="space-y-6">
              <h4 className="font-semibold text-base text-foreground">Main Pages</h4>
              <ul className="space-y-4">
                <li><span className="text-muted-foreground/60 block mb-2 pointer-events-none">All pages included</span></li>
                {["Home", "Features", "Pricing", "Contact"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <h4 className="font-semibold text-base text-foreground">Other</h4>
              <ul className="space-y-4">
                {["About", "Team Member", "Job detail", "Blog", "404 page"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div className="space-y-6">
              <h4 className="font-semibold text-base text-foreground">Legal & Utilities</h4>
              <ul className="space-y-4">
                {["Integration", "Download", "Changelog"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">

          {/* Copyright */}
          <div className="md:w-1/3  text-left space-y-1">
            <p>© {currentYear} Copyright - DevHut | Designed by DevHut Studio |</p>
            <p>Made by Himanshu | Powered by Next.js</p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 justify-center md:w-1/3">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <Link key={i} href="#" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary flex items-center justify-center transition-all">
                <Icon className="w-4 h-4" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="md:w-1/3 flex justify-center md:justify-end"></div>


        </div>
      </div>
    </footer>
  );
}
