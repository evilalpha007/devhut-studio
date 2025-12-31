import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Toaster />
    </main>
  );
}
