"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What do I need to get started?",
    answer: "Simply reach out to us via our contact form. We'll schedule a discovery call to discuss your goals, requirements, and how we can best bring your vision to life.",
  },
  {
    question: "What kind of customization is available?",
    answer: "Everything! We believe in bespoke solutions. From UI/UX design to custom backend logic, every project we undertake is tailored exactly to your brand identity and business needs.",
  },
  {
    question: "How easy is it to edit for beginners?",
    answer: "We provide comprehensive handovers and can integrate user-friendly CMS options like Sanity or Payload, making it incredibly easy for you to manage your content without touching a line of code.",
  },
  {
    question: "Let me know more about moneyback guarantee?",
    answer: "We strive for excellence, but if you're not satisfied with the initial design concepts, we offer a hassle-free money-back guarantee. Your trust is our priority.",
  },
  {
    question: "Do I need to know how to code?",
    answer: "Not at all. We handle all the technical heavy lifting. You'll receive a fully functional, optimized product ready to launch.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="border-b border-border last:border-none">
      <button
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className={`text-xl md:text-2xl font-semibold transition-colors ${isOpen ? "text-primary" : "text-foreground group-hover:text-primary/70"}`}>
          {question}
        </span>
        <div className={`w-10 h-10 rounded-full border border-border flex items-center justify-center transition-all ${isOpen ? "bg-primary border-primary rotate-180" : "bg-muted"}`}>
          {isOpen ? <Minus className="w-5 h-5 text-white" /> : <Plus className="w-5 h-5 text-muted-foreground" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Side */}
          <div className="lg:col-span-4 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">FAQ</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              Frequently <br />
              <span className="text-primary">Asked Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Have questions? Our FAQ section has you covered with quick answers to the most common inquiries.
            </p>
          </div>

          {/* Right Side - Accordion */}
          <div className="lg:col-span-8">
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-[2rem] p-6 md:p-12">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
