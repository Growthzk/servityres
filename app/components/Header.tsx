// app/components/Header.tsx
"use client";

import { Button } from "./ui/button";
import { Menu, X, Search, User, ShoppingCart, Phone } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Función de scroll suave (del proyecto de Manus)
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <header className="bg-[#1e2b4c] text-white sticky top-0 z-50 border-b-4 border-[#dcb933]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo (adaptado de Manus, pero con tu estructura) */}
          <div className="flex items-center gap-3">
            <img
              src="/images/logo-servityres.jpeg"
              alt="Servityres Logo"
              className="w-12 h-12 object-contain rounded-full bg-white p-1"
            />
            <h1 className="text-2xl font-bold text-[#dcb933]">ServiTyres</h1>
          </div>

          {/* Desktop Nav (con scroll suave) */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("hero")} className="hover:text-[#dcb933] font-medium text-sm">Inicio</button>
            <button onClick={() => scrollToSection("productos")} className="hover:text-[#dcb933] text-sm">Productos</button>
            <button onClick={() => scrollToSection("servicios")} className="hover:text-[#dcb933] text-sm">Servicios</button>
            <button onClick={() => scrollToSection("ubicacion")} className="hover:text-[#dcb933] text-sm">Ubicación</button>
            <button onClick={() => scrollToSection("contacto")} className="hover:text-[#dcb933] text-sm">Contacto</button>
          </nav>

          {/* Desktop Actions (BUSCAR LLANTAS + Cotizar Ahora + íconos) */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              onClick={() => scrollToSection("productos")}
              className="bg-[#dcb933] hover:bg-[#c5b82d] text-[#1e2b4c] font-bold rounded-full px-6"
            >
              <Search className="w-4 h-4 mr-2" />
              BUSCAR LLANTAS
            </Button>
            <Search className="w-5 h-5 cursor-pointer hover:text-[#dcb933]" />
            <User className="w-5 h-5 cursor-pointer hover:text-[#dcb933]" />
            <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-[#dcb933]" />
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-[#dcb933] hover:bg-[#c5b82d] text-[#1e2b4c] font-bold rounded-full px-4"
            >
              <Phone className="w-4 h-4 mr-2" />
              Cotizar Ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <nav className="md:hidden py-4 border-t border-gray-700 bg-[#1e2b4c]">
            <div className="space-y-1 px-4">
              <button onClick={() => scrollToSection("hero")} className="block py-2 hover:text-[#dcb933] w-full text-left">Inicio</button>
              <button onClick={() => scrollToSection("productos")} className="block py-2 hover:text-[#dcb933] w-full text-left">Productos</button>
              <button onClick={() => scrollToSection("servicios")} className="block py-2 hover:text-[#dcb933] w-full text-left">Servicios</button>
              <button onClick={() => scrollToSection("ubicacion")} className="block py-2 hover:text-[#dcb933] w-full text-left">Ubicación</button>
              <button onClick={() => scrollToSection("contacto")} className="block py-2 hover:text-[#dcb933] w-full text-left">Contacto</button>
              <div className="pt-4 border-t border-gray-700 space-y-2">
                <Button
                  onClick={() => scrollToSection("productos")}
                  className="w-full bg-[#dcb933] hover:bg-[#c5b82d] text-[#1e2b4c] font-bold rounded-full"
                >
                  <Search className="w-4 h-4 mr-2" />
                  BUSCAR LLANTAS
                </Button>
                <Button
                  onClick={() => scrollToSection("contacto")}
                  className="w-full bg-[#dcb933] hover:bg-[#c5b82d] text-[#1e2b4c] font-bold rounded-full"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Cotizar Ahora
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}