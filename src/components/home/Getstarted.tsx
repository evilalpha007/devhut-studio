"use client";
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Getstarted = () => {

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.3, y: 60 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" as const }
        }
    }

    return (
        <section className="relative py-6 md:py-32 overflow-hidden bg-white">

            <motion.div
                className="container-1 px-1 relative z-10 flex flex-col items-center justify-center text-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5, once: true }}
            >

                {/* Top Left - Piggy Bank */}
                <motion.div
                    variants={imageVariants}
                    className="absolute -top-10 left-[0%] md:left-[10%] lg:left-[5%] hidden md:flex "
                >
                    <Image
                        src="/image/getStarted/pig.avif"
                        alt="Shape 1"
                        width={200}
                        className='object-cover rounded-full'
                        height={100}
                    />
                </motion.div>

                {/* Top Right - Clock */}
                <motion.div
                    variants={imageVariants}
                    className="absolute -top-4 right-[0%] md:right-[10%] lg:right-[5%] hidden md:flex "
                >
                    <div className="">
                        <Image
                            src="/image/getStarted/clock.avif"
                            alt="Shape 1"
                            width={200}
                            className='object-cover rounded-full'
                            height={100}
                        />
                    </div>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-100px", once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className=" leading-tight font-normal poppins tracking-tight text-brand-blue mb-6"
                >
                    Our app is an{' '}
                    <span className="block">all-in-one solution for</span>
                    <span className="inline sm:block">managing your money</span>
                    <span className="inline sm:block">and financial goals.</span>
                </motion.h1>

                {/* Subheading with lines */}
                <div className="flex items-center justify-between gap-4 mx-auto mb-10 text-gray-500">
                    <Image
                        src="/image/background/bg.svg"
                        alt="Shape 1"
                        width={250}
                        className='object-cover rounded-full hidden sm:block'
                        height={100}
                    />
                    <div className="hidden md:block w-16 h-[2px] bg-gradient-to-r from-transparent to-gray-300"></div>
                    <div className="flex flex-col gap-12 sm:gap-6 items-center mt-6 sm:mt-24">

                        <h3 className="text-center poppins ">
                            Experience the peace of mind that comes with<br className="hidden md:block" />
                            having your finances under control.
                        </h3>
                        <div className="flex justify-center">

                            <button className="group flex items-center gap-3 pl-6 pr-2 py-2 bg-brand-blue-50 hover:bg-brand-light-hover text-brand-blue-900 rounded-full transition-all duration-300">
                                <span className="font-medium">Get Started Free</span>
                                <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <ArrowUpRight className="w-5 h-5 text-white" />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="hidden md:block w-16 h-[2px] bg-gradient-to-l from-transparent to-gray-300">

                    </div>
                    <Image
                        src="/image/background/bg.svg"
                        alt="Shape 1"
                        width={250}
                        className='object-cover rounded-full hidden sm:block'
                        height={400}
                    />

                </div>

                {/* CTA Button */}


                {/* Bottom Left - Coins */}
                <motion.div
                    variants={imageVariants}
                    className="absolute bottom-10 left-[5%] md:left-[8%] hidden md:flex"
                >
                    <Image
                        src="/image/getStarted/glass.avif"
                        alt="Shape 1"
                        width={200}
                        className='object-cover rounded-full'
                        height={100}
                    />
                </motion.div>

                {/* Bottom Right - Shapes */}
                <motion.div
                    variants={imageVariants}
                    className="absolute -bottom-10 right-[5%] md:right-[5%] hidden md:flex"
                >
                    <Image
                        src="/image/getStarted/cube.avif"
                        alt="Shape 1"
                        width={200}
                        className='object-cover rounded-full'
                        height={100}
                    />
                </motion.div>

            </motion.div>
        </section>
    )
}

export default Getstarted