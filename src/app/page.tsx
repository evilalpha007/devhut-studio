import { Hero } from "@/components/home/Hero";
import Getstarted from "@/components/home/Getstarted";
import Features from "@/components/home/Features";
import { Contact } from "@/components/home/Contact";
import { Footer } from "@/components/home/Footer";
import { Toaster } from "@/components/ui/sonner";
import AdditionalFeature from "@/components/home/AdditionalFeature";
import { FooterCTA } from "@/components/home/FooterCTA";
import SeeYourWealth from "@/components/home/SeeYourWealth";
import { Testimonials } from "@/components/home/Testimonials";
import Blog from "@/components/home/Blog";
import { FAQ } from "@/components/home/FAQ";
export default function Home() {
  return (
    <main className="relative min-h-screen">

      <Hero />
      <Getstarted />
      <Features />
      <AdditionalFeature />
      <FooterCTA />
      <SeeYourWealth />
      <Testimonials />
      <Blog />
      <FAQ />
      {/* <Contact /> */}

      <Toaster />
      <div className="pointer-events-none fixed bottom-0 left-0 z-40 h-12 md:h-16 w-full bg-gradient-to-t from-background/1 to-transparent backdrop-blur-[1px]" />
    </main>
  );
}
