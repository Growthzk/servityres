import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsGrid from "@/components/ProductsGrid";
import Services from "@/components/Services";
import Carousel from "@/components/Carousel";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Importar dinámicamente las imágenes de llantas
const tireImages = Array.from({ length: 111 }, (_, i) => {
  const imageNames = [
    'WhatsAppImage2025-10-30at6.24.24PM(1).jpeg',
    'WhatsAppImage2025-10-30at6.24.24PM.jpeg',
    'WhatsAppImage2025-10-30at6.24.27PM(1).jpeg',
    'WhatsAppImage2025-10-30at6.24.27PM(2).jpeg',
    'WhatsAppImage2025-10-30at6.24.27PM.jpeg',
    'WhatsAppImage2025-10-30at6.24.28PM(1).jpeg',
    'WhatsAppImage2025-10-30at6.24.28PM.jpeg',
    'WhatsAppImage2025-10-30at6.24.29PM(1).jpeg',
    'WhatsAppImage2025-10-30at6.24.29PM(2).jpeg',
    'WhatsAppImage2025-10-30at6.24.29PM(3).jpeg',
    'WhatsAppImage2025-10-30at6.24.29PM(4).jpeg',
    'WhatsAppImage2025-10-30at6.24.29PM.jpeg',
    'WhatsAppImage2025-10-30at6.24.33PM(1).jpeg',
    'WhatsAppImage2025-10-30at6.24.33PM.jpeg',
    'WhatsAppImage2025-10-30at6.24.34PM(1).jpeg',
    'WhatsAppImage2025-10-30at6.24.34PM(2).jpeg',
    'WhatsAppImage2025-10-30at6.24.34PM(3).jpeg',
    'WhatsAppImage2025-10-30at6.24.34PM.jpeg',
    'WhatsAppImage2025-10-30at6.24.35PM(1).jpeg',
    'WhatsAppImage2025-10-30at6.24.35PM(2).jpeg',
    'WhatsAppImage2025-10-30at6.24.35PM(3).jpeg',
    'WhatsAppImage2025-10-30at6.24.35PM.jpeg',
    'WhatsAppImage2025-10-30at6.24.36PM(1).jpeg',
    'WhatsAppImage2025-10-30at6.24.36PM(2).jpeg',
    'WhatsAppImage2025-10-30at6.24.36PM(3).jpeg',
    'WhatsAppImage2025-10-30at6.24.36PM(4).jpeg',
    'WhatsAppImage2025-10-30at6.24.36PM.jpeg',
    'WhatsAppImage2025-10-30at6.24.38PM.jpeg',
    'WhatsAppImage2025-10-30at6.24.39PM(1).jpeg',
    'WhatsAppImage2025-10-30at6.24.39PM(2).jpeg',
  ];
  return `/images/llantas/${imageNames[i % imageNames.length]}`;
});

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProductsGrid />
        <Carousel images={tireImages} title="Nuestras Llantas de Última Tecnología" />
        <Services />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
