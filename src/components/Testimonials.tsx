"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Emily Smith",
    role: "Lyon, France",
    content: "The app is intuitive and easy to navigate, and it's helped me reach my financial goals faster than I ever thought possible.",
    avatar: "https://i.pravatar.cc/150?u=emily",
    rating: 4.5,
  },
  {
    name: "Michael Brown",
    role: "London, UK",
    content: "I was skeptical at first, but then I have completely transformed my relationship with money.",
    avatar: "https://i.pravatar.cc/150?u=michael",
    rating: 5,
  },
  {
    name: "Jane Cooper",
    role: "Montreal, Canada",
    content: "I've finally taken control of my finances. It's so easy to use and has helped me save more money than ever before.",
    avatar: "https://i.pravatar.cc/150?u=jane",
    rating: 4,
  },
  {
    name: "Wade Warren",
    role: "Michigan, US",
    content: "Simplify your financial life. Our intuitive app makes managing your money effortless.",
    avatar: "https://i.pravatar.cc/150?u=wade",
    rating: 5,
  },
  {
    name: "Robert Fox",
    role: "Sydney, Australia",
    content: "The best financial tool I've ever used. The insights are incredible and the design is top-notch.",
    avatar: "https://i.pravatar.cc/150?u=robert",
    rating: 5,
  },
  {
    name: "Leslie Alexander",
    role: "Tokyo, Japan",
    content: "Highly recommended for anyone looking to get serious about their personal finances.",
    avatar: "https://i.pravatar.cc/150?u=leslie",
    rating: 4.5,
  },
];

const ScrollingColumn = ({ items, reverse = false }: { items: typeof testimonials; reverse?: boolean }) => {
  return (
    <div className="flex flex-col gap-6 relative h-[600px] overflow-hidden">
      <motion.div
        animate={{
          y: reverse ? [0, -1200] : [-1200, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col gap-6"
      >
        {[...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="p-8 rounded-[2rem] bg-card border border-border flex flex-col items-center text-center gap-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
              <Image src={item.avatar} alt={item.name} fill className="object-cover" />
            </div>
            <div>
              <h4 className=" text-lg">{item.name}</h4>
              <p className="text-xs text-muted-foreground">{item.role}</p>
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(item.rating) ? "fill-brand-blue-700 text-brand-blue-700" : "text-muted-foreground/30"
                    }`}
                />
              ))}
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground italic">
              "{item.content}"
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export function Testimonials() {
  return (
    <section className="bg-background py-6 sm:py-14  relative overflow-hidden poppins">


      <div className="container-1 mx-auto px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Side */}
          <div className="lg:col-span-5 space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gray-blue border border-brand-blue-700">
              <span className="text-xs  text-brand-blue-700 uppercase tracking-widest">99 Testimonials</span>
            </div>

            <motion.h1
              className="text-5xl md:text-7xl tracking-tight leading-[1.1]"
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
                Our Users
              </motion.span>
              <motion.span
                className="block text-brand-blue-700"
                variants={{
                  hidden: { opacity: 0, x: -40, y: 40 },
                  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
              >
                Talk About Us
              </motion.span>
            </motion.h1>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-background bg-muted overflow-hidden relative">
                    <Image src={`https://i.pravatar.cc/100?u=user${i}`} alt="user" fill className="object-cover" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-background bg-primary flex items-center justify-center text-white  text-sm">
                  +1k
                </div>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  <span className="text-2xl ">4.8/5</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-2 h-2 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground ">Based on 14k+ reviews</p>
              </div>
            </div>
          </div>

          {/* Right Side - Scrolling Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 relative mask-vertical">
            <div className="relative">
              <ScrollingColumn items={testimonials} reverse={true} />
              {/* Overlay gradients for smooth fade */}
              <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-background to-transparent z-10" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background to-transparent z-10" />
            </div>
            <div className="hidden md:block relative">
              <ScrollingColumn items={[...testimonials].reverse()} reverse={false} />
              {/* Overlay gradients for smooth fade */}
              <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-background to-transparent z-10" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background to-transparent z-10" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mask-vertical {
          mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  );
}
