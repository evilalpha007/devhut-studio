"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Banknote, TrendingUp, CreditCard, FileText, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
    colorClass: string;
    bgClass: string;
}

const features = [
    {
        icon: PieChart,
        title: "Budgeting",
        description: "Manage detailed budgets across categories like housing, transportation to stay on top of your finances.",
        colorClass: "text-blue-500",
        bgClass: "bg-blue-100",
    },
    {
        icon: Banknote,
        title: "Debt Management",
        description: "Track and manage all debts, from credit card balances to personal loans, with clear insights to reduce liabilities.",
        colorClass: "text-indigo-500",
        bgClass: "bg-indigo-100",
    },
    {
        icon: TrendingUp,
        title: "Investment Tracking",
        description: "Monitor and analyze your investment portfolio, including stocks, bonds, and mutual funds, to maximize growth.",
        colorClass: "text-cyan-500",
        bgClass: "bg-cyan-100",
    },
    {
        icon: CreditCard,
        title: "Bill Payment",
        description: "Pay and schedule bills directly within the app, giving you a single place to manage recurring expenses.",
        colorClass: "text-pink-500",
        bgClass: "bg-pink-100",
    },
    {
        icon: FileText,
        title: "Tax Preparation",
        description: "Identify tax-saving opportunities, organize documents, and simplify your preparation for filing season.",
        colorClass: "text-green-500",
        bgClass: "bg-green-100",
    },
    {
        icon: Shield,
        title: "Insurance Management",
        description: "Manage your insurance policies and claims in one place, ensuring protection and peace of mind.",
        colorClass: "text-amber-500",
        bgClass: "bg-amber-100",
    },
];

const MoreFeatures = () => {
    return (
        <section className="py-20 md:py-32 bg-background overflow-hidden">
            <div className="container-1">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-brand-blue text-sm mb-6">
                        <span className="grid place-items-center w-4 h-4">
                            <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 text-current">
                                <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zm0 10h6v6h-6v-6zM4 14h6v6H4v-6z" fill="currentColor" />
                            </svg>
                        </span>
                        More Features
                    </div>

                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.1]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.2 } }
                        }}
                    >
                        <motion.span
                            className="block"
                            variants={{
                                hidden: { opacity: 0, x: -40, y: 40 },
                                visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                        >
                            More Great
                        </motion.span>
                        <motion.span
                            className="block text-brand-blue mt-2"
                            variants={{
                                hidden: { opacity: 0, x: -40, y: 40 },
                                visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                        >
                            Additions Features
                        </motion.span>
                    </motion.h2>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={cn(
                                "group p-8 rounded-[2rem] bg-brand-surface transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-blue-50/50"
                            )}
                        >
                            <div className={cn(
                                "w-16 h-16 rounded-[1.2rem] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 border-[5px] border-white shadow-sm",
                                feature.bgClass,
                                feature.colorClass
                            )}>
                                <feature.icon size={26} strokeWidth={2} />
                            </div>

                            <h3 className="text-xl font-semibold text-foreground mb-4">
                                {feature.title}
                            </h3>

                            <p className="text-muted-foreground leading-relaxed text-base">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MoreFeatures