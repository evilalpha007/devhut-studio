"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, CircleHelp } from "lucide-react";

const faqs = [
  {
    question: "How often should I review my financial data?",
    answer: "We recommend reviewing your financial data at least once a week. Regular check-ins help you stay on top of your spending, track progress toward your goals, and make informed decisions.",
  },
  {
    question: "What kind of financial data can I track with this app?",
    answer: "You can track a wide range of financial data including income, daily expenses, recurring bills, investment portfolios, and savings goals, all in one centralized dashboard.",
  },
  {
    question: "Can I track my spending automatically?",
    answer: "Yes! By securely connecting your bank accounts, our app automatically categorizes your transactions in real-time, saving you the hassle of manual entry.",
  },
  {
    question: "Does the app offer investment tracking?",
    answer: "Absolutely. We provide real-time tracking for stocks, crypto, and mutual funds, giving you a comprehensive view of your net worth and investment performance.",
  },
  {
    question: "How do I sign up for the app?",
    answer: "Signing up is simple. Just download our app from the App Store or Google Play, create an account with your email, and follow the guided setup to start your financial journey.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => {
  return (
    <motion.div
      initial={false}
      animate={{ backgroundColor: isOpen ? "var(--brand-blue-50)" : "#ffffff" }}
      className={`rounded-2xl md:rounded-[2rem] overflow-hidden transition-all duration-300 ${isOpen ? "border-transparent" : "border border-slate-200"}`}
    >
      <button
        onClick={onClick}
        className={`w-full py-6 px-6 md:px-10 flex items-center justify-between text-left group ${isOpen ? "pb-4" : ""}`}
      >
        <span className={`text-lg md:text-xl font-medium transition-colors ${isOpen ? "text-brand-blue" : "text-foreground"}`}>
          {question}
        </span>
        <div className={`shrink-0 ml-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          {isOpen ? <ChevronDown className="w-5 h-5 text-brand-blue" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 md:px-10">
              <div className="h-px w-full bg-brand-blue-100/50 mb-4" />
              <p className="pb-8 text-base md:text-lg text-slate-500 leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 sm:py-24 bg-white poppins">
      <div className="container-1 mx-auto flex flex-col items-center justify-center mb-16">
        <div className="flex items-center gap-2 px-5 py-1.5 rounded-full border border-blue-100 bg-brand-blue-50/50 text-brand-blue mb-8">
          <CircleHelp className="w-4 h-4" />
          <span className="text-sm tracking-wide">FAQ</span>
        </div>
        <motion.h1
          className="tracking-tight text-center text-foreground"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.span
            className="block sm:inline"
            variants={{
              hidden: { opacity: 0, x: -40, y: 40 },
              visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
          >
            Frequently Asked{" "}
          </motion.span>
          <motion.span
            className="block sm:inline text-brand-blue"
            variants={{
              hidden: { opacity: 0, x: -40, y: 40 },
              visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
          >
            Questions
          </motion.span>
        </motion.h1>
      </div>

      <div className="max-w-4xl mx-auto my-4 flex flex-col gap-4 px-0 md:px-0">
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
    </section>
  );
}
