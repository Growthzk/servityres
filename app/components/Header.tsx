// app/components/Header.tsx
"use client";

import { Button } from "./ui/button";
import { Menu, X, Search, User, ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-[#1e2b4c] text-white sticky top-0 z-50 border-b-4 border-[#dcb933]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#dcb933] rounded-full flex items-center justify-center font-bold text-[#1e2b4c] text-xl">
              ST
            </div>
            <h1 className="text-2xl font-bold text-[#dcb933]">ServiTyres</h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-[#dcb933] font-medium text-sm">Inicio</a>
            <a href="#" className="hover:text-[#dcb933] text-sm">Servicios</a>
            <a href="#" className="hover:text-[#dcb933] text-sm">Sobre nosotros</a>
            <a href="#" className="hover:text-[#dcb933] text-sm">Contacto</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button className="bg-[#dcb933] hover:bg-[#c5b82d] text-[#1e2b4c] font-bold rounded-full px-6">
              <Search className="w-4 h-4 mr-2" />
              BUSCAR LLANTAS
            </Button>
            <Search className="w-5 h-5 cursor-pointer hover:text-[#dcb933]" />
            <User className="w-5 h-5 cursor-pointer hover:text-[#dcb933]" />
            <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-[#dcb933]" />
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
              <a href="#" className="block py-2 hover:text-[#dcb933]">Inicio</a>
              <a href="#" className="block py-2 hover:text-[#dcb933]">Servicios</a>
              <a href="#" className="block py-2 hover:text-[#dcb933]">Sobre nosotros</a>
              <a href="#" className="block py-2 hover:text-[#dcb933]">Contacto</a>
              <div className="pt-4 border-t border-gray-700">
                <Button className="w-full bg-[#dcb933] hover:bg-[#c5b82d] text-[#1e2b4c] font-bold rounded-full">
                  <Search className="w-4 h-4 mr-2" />
                  BUSCAR LLANTAS
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}