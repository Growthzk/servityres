// app/components/Hero.tsx
"use client";

import { Button } from "./ui/button";
import { ArrowRight, Car } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24 md:py-32">
      <div className="absolute inset-0 bg-grid-gray-200/30 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1e2b4c] tracking-tight animate-fade-in">
            Servicio de Llantas
            <span className="block text-[#dcb933] mt-2">con Tecnología de Punta</span>
          </h1>
          
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 animate-fade-in-delay">
            Diagnóstico preciso, alineación perfecta y llantas de calidad premium. 
            Tu seguridad comienza con nosotros.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            {/* Botón Principal */}
            <Button
              className="bg-[#dcb933] hover:bg-[#c5b82d] text-[#1e2b4c] font-bold rounded-full px-8 py-6 text-lg shadow-lg"
              size="lg"
            >
              Agendar Cita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            {/* Botón Secundario */}
            <Button
              variant="outline"
              className="border-2 border-[#1e2b4c] text-[#1e2b4c] hover:bg-[#1e2b4c] hover:text-white rounded-full px-8 py-6 text-lg"
              size="lg"
            >
              Ver Servicios
            </Button>
          </div>
        </div>

        {/* Efectos de fondo */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#dcb933]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#1e2b4c]/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
    </section>
  );
}