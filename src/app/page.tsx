import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import Getstarted from "@/components/Getstarted";
import Features from "@/components/Features";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import AdditionalFeature from "@/components/AdditionalFeature";
import { FooterCTA } from "@/components/FooterCTA";
import SeeYourWealth from "@/components/SeeYourWealth";
import { Testimonials } from "@/components/Testimonials";
import Blog from "@/components/Blog";
import { FAQ } from "@/components/FAQ";
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
      <FAQ/>
      {/* <Contact /> */}

      <Toaster />
      <div className="pointer-events-none fixed bottom-0 left-0 z-40 h-12 md:h-16 w-full bg-gradient-to-t from-background/1 to-transparent backdrop-blur-[1px]" />
    </main>
  );
}
