"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Contact() {
  return (
    <section id="contact" className="pb-32 pt-20 bg-background relative">
      <div className="container mx-auto px-4 max-w-[1440px]">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Collaborate With Us</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
            Have Any Doubts? We <br />
            are Ready to Help.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you need guidance, support, or a fresh start, our team is ready to assist you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-primary/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="first-name" className="text-sm font-bold uppercase tracking-wider text-muted-foreground ml-1">First name*</Label>
                  <Input id="first-name" placeholder="Jane" className="h-16 rounded-2xl bg-muted/50 border-border focus:ring-primary/20 px-6 text-lg" required />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="last-name" className="text-sm font-bold uppercase tracking-wider text-muted-foreground ml-1">Last name*</Label>
                  <Input id="last-name" placeholder="Smith" className="h-16 rounded-2xl bg-muted/50 border-border focus:ring-primary/20 px-6 text-lg" required />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-muted-foreground ml-1">How can we reach you?*</Label>
                <Input id="email" type="email" placeholder="jane@framer.com" className="h-16 rounded-2xl bg-muted/50 border-border focus:ring-primary/20 px-6 text-lg" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="location" className="text-sm font-bold uppercase tracking-wider text-muted-foreground ml-1">Where Are you from?*</Label>
                  <Input id="location" placeholder="Select your country..." className="h-16 rounded-2xl bg-muted/50 border-border focus:ring-primary/20 px-6 text-lg" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="type" className="text-sm font-bold uppercase tracking-wider text-muted-foreground ml-1">What's the type of your company?*</Label>
                  <Input id="type" placeholder="Select category" className="h-16 rounded-2xl bg-muted/50 border-border focus:ring-primary/20 px-6 text-lg" />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-muted-foreground ml-1">Message*</Label>
                <textarea 
                  id="message" 
                  placeholder="Type your message..." 
                  className="w-full min-h-[160px] rounded-2xl bg-muted/50 border border-border focus:ring-primary/20 p-6 text-lg outline-hidden resize-none"
                  required
                />
              </div>

              <Button className="w-full h-16 rounded-2xl text-xl font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all active:scale-[0.98]">
                Submit Now
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Background blobs */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-linear-to-t from-primary/5 to-transparent -z-10" />
    </section>
  );
}
