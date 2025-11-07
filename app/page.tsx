import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TiresCarousel from "@/components/TiresCarousel";
import Brands from "@/components/Brands";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <Features />
      <TiresCarousel />
      <Brands />
      <CTA />
      <Footer />
    </main>
  );
}
