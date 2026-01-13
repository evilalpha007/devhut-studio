"use client";

import Image from 'next/image'
import { BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'

const Blog = () => {
    const mainPost = {
        title: "Navigating the Stock Market: A Beginner's Guide",
        description: "It's been an incredible journey over the past year, and what better way to commemorate this milestone than...",
        date: "Apr 24, 2025",
        category: "Advice",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", // Skyscraper/Building
    }

    const sidePosts = [
        {
            title: "Why You Should Not Invest Your Emergency Fund",
            date: "Apr 23, 2025",
            category: "Advice",
            image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=2071&auto=format&fit=crop", // Money/Currency
        },
        {
            title: "Adjusting The Sails Of Your Investment To The Weather",
            date: "Apr 22, 2025",
            category: "Investing",
            image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=2071&auto=format&fit=crop", // Money/Currency
        },
        {
            title: "3 Essential Questions You Need to Ask Your Insurance Advisor",
            date: "Apr 21, 2025",
            category: "Insurance",
            image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=2071&auto=format&fit=crop", // Money/Currency
        }
    ]

    return (
        <section className="" id="blog">
            <div className="container-1 mx-auto">
                {/* Header */}
                <div className="flex flex-col items-center mb-16 space-y-4">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 w-fit">
                        <BookOpen size={14} />
                        <span className="text-xs  uppercase tracking-wider">Blog</span>
                    </div>

                    <motion.h1
                        className="text-4xl md:text-5xl text-center leading-tight tracking-tight text-gray-900"
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
                            Read the Articles
                        </motion.span>
                        <motion.span
                            className="block text-brand-blue"
                            variants={{
                                hidden: { opacity: 0, x: -40, y: 40 },
                                visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                        >
                            Written By Professionals
                        </motion.span>
                    </motion.h1>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* Left Column - Main Post */}
                    <div className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-2xl mb-6 aspect-16/10">
                            <Image
                                src={mainPost.image}
                                alt={mainPost.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm">
                                <span className=" text-brand-blue">{mainPost.category}</span>
                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                <span className="text-gray-500">{mainPost.date}</span>
                            </div>
                            <h3 className=" leading-tight group-hover:text-brand-blue transition-colors">
                                {mainPost.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed text-lg line-clamp-2">
                                {mainPost.description}
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Side Posts */}
                    <div className="flex flex-col gap-8">
                        {sidePosts.map((post, index) => (
                            <div key={index} className="group flex flex-col sm:flex-row gap-6 items-start cursor-pointer">
                                <div className="relative overflow-hidden rounded-xl w-full sm:w-48 aspect-4/3 shrink-0">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="space-y-2 py-1">
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className=" text-[#0040C1]">{post.category}</span>
                                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                        <span className="text-gray-500">{post.date}</span>
                                    </div>
                                    <h4 className="text-xl  text-gray-900 leading-snug group-hover:text-[#0040C1] transition-colors">
                                        {post.title}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Blog