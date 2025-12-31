import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturesCurved } from "@/components/FeaturesCurved";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <FeaturesCurved />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
}
