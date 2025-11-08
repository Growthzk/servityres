import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Header siempre visible en negro, sin cambios de scroll

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Inicio", id: "hero" },
    { name: "Productos", id: "productos" },
    { name: "Servicios", id: "servicios" },
    { name: "Ubicación", id: "ubicacion" },
    { name: "Contacto", id: "contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md shadow-lg">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/images/logo-servityres.jpeg"
              alt="Servityres Logo"
              className="h-14 w-14 object-contain rounded-lg bg-white p-1"
            />
            <div>
              <h1 className="text-2xl font-black text-white tracking-tight">
                SERVI<span className="text-primary">TYRES</span>
              </h1>
              <p className="text-xs text-gray-300 font-semibold">S.A.S</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-white hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-primary hover:bg-primary/90 text-black font-bold"
            >
              <Phone className="mr-2 h-4 w-4" />
              Cotizar Ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
            <nav className="flex flex-col space-y-4 py-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-white hover:text-primary transition-colors duration-300 font-medium text-left px-4"
                >
                  {link.name}
                </button>
              ))}
              <div className="px-4 pt-4 border-t border-gray-800">
                <Button
                  onClick={() => scrollToSection("contacto")}
                  className="w-full bg-primary hover:bg-primary/90 text-black font-bold"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Cotizar Ahora
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
