"use client";

import React from "react";
import { Mail, Linkedin, Github, Users } from "lucide-react";
import Image from "next/image";
import * as motion from "framer-motion/client";

const teamMembers = [
    {
        name: "Sarah Jane",
        role: "Founder & CEO",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
        socials: { mail: "#", linkedin: "#", github: "#" },
    },
    {
        name: "John David",
        role: "CEO",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
        socials: { mail: "#", linkedin: "#", github: "#" },
    },
    {
        name: "Michael James",
        role: "Marketing Leader",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop",
        socials: { mail: "#", linkedin: "#", github: "#" },
    },
    {
        name: "Jennifer Ann",
        role: "Project Manager",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
        socials: { mail: "#", linkedin: "#", github: "#" },
    },

];

const Team = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col items-center justify-center mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 px-4 py-1.5 rounded-full  border border-blue-100 bg-brand-blue-50/50 text-brand-blue mb-6"
                    >
                        <Users size={14} />
                        <span className="text-sm font-medium">Team</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900"
                    >
                        Our Talented <br className="md:hidden" />
                        <span className="text-blue-600">Team Members</span>
                    </motion.h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-blue-50/50 hover:bg-blue-50 transition-colors duration-300 rounded-3xl p-8 flex flex-col items-center text-center group"
                        >
                            {/* Image Container with Grayscale Effect */}
                            <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-300 ring-4 ring-white shadow-sm">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Info */}
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                {member.name}
                            </h3>
                            <p className="text-sm text-gray-500 font-medium mb-6">
                                {member.role}
                            </p>

                            {/* Socials */}
                            <div className="flex items-center gap-3 mt-auto">
                                <a
                                    href={member.socials.mail}
                                    className="p-2.5 rounded-full bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-100 transition-all duration-300"
                                >
                                    <Mail size={16} />
                                </a>
                                <a
                                    href={member.socials.linkedin}
                                    className="p-2.5 rounded-full bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-100 transition-all duration-300"
                                >
                                    <Linkedin size={16} />
                                </a>
                                <a
                                    href={member.socials.github}
                                    className="p-2.5 rounded-full bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-100 transition-all duration-300"
                                >
                                    <Github size={16} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;