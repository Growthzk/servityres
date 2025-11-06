// app/components/Hero.tsx
"use client";

import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Car, Ruler, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Hero() {
  const [searchType, setSearchType] = useState<"vehicle" | "size">("vehicle");
  const [vehicleData, setVehicleData] = useState({
    year: "",
    make: "",
    model: "",
    trim: "",
  });
  const [tireSize, setTireSize] = useState({
    width: "",
    ratio: "",
    diameter: "",
  });

  const handleVehicleSearch = () => {
    if (!vehicleData.year || !vehicleData.make) {
      toast.error("Completa al menos año y marca");
      return;
    }
    toast.success("Buscando neumáticos...");
  };

  const handleSizeSearch = () => {
    if (!tireSize.width || !tireSize.ratio || !tireSize.diameter) {
      toast.error("Completa todos los campos del tamaño");
      return;
    }
    toast.success(`Buscando ${tireSize.width}/${tireSize.ratio}R${tireSize.diameter}...`);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 30 }, (_, i) => currentYear - i);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24 md:py-32">
      <div className="absolute inset-0 bg-grid-gray-200/30 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1e2b4c] tracking-tight animate-fade-in">
            Cuéntanos sobre tu
            <span className="block text-[#dcb933] mt-2">vehículo.</span>
          </h1>
          
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 animate-fade-in-delay">
            Todos los campos son requeridos. Encuentra las llantas perfectas en segundos.
          </p>

          {/* Pestañas de búsqueda */}
          <div className="mt-10 flex justify-center">
            <div className="inline-flex bg-gray-100 rounded-full p-1 animate-fade-in-delay-2">
              <button
                onClick={() => setSearchType("vehicle")}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  searchType === "vehicle"
                    ? "bg-[#1e2b4c] text-white"
                    : "text-gray-600 hover:text-[#1e2b4c]"
                }`}
              >
                <Car className="h-5 w-5" />
                <span>VEHÍCULO</span>
              </button>
              <button
                onClick={() => setSearchType("size")}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  searchType === "size"
                    ? "bg-[#1e2b4c] text-white"
                    : "text-gray-600 hover:text-[#1e2b4c]"
                }`}
              >
                <Ruler className="h-5 w-5" />
                <span>TAMAÑO</span>
              </button>
            </div>
          </div>

          {/* Formulario de búsqueda */}
          <div className="mt-8 max-w-2xl mx-auto animate-fade-in-delay-3">
            {searchType === "vehicle" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-[#1e2b4c] mb-2 uppercase">
                    Año del Vehículo
                  </label>
                  <Select
                    value={vehicleData.year}
                    onValueChange={(value) =>
                      setVehicleData({ ...vehicleData, year: value })
                    }
                  >
                    <SelectTrigger className="h-14 text-lg border-2 border-[#1e2b4c]/20 focus:border-[#dcb933]">
                      <SelectValue placeholder="Selecciona el año" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map((year) => (
                        <SelectItem key={year} value={year.toString()}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-14 border-2 border-[#1e2b4c]/30 hover:border-[#dcb933] font-bold text-[#1e2b4c]"
                    onClick={() => toast.info("Selecciona la marca")}
                  >
                    Marca
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-14 border-2 border-[#1e2b4c]/30 hover:border-[#dcb933] font-bold text-[#1e2b4c]"
                    onClick={() => toast.info("Selecciona el modelo")}
                  >
                    Modelo
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-14 border-2 border-[#1e2b4c]/30 hover:border-[#dcb933] font-bold text-[#1e2b4c]"
                    onClick={() => toast.info("Selecciona la versión")}
                  >
                    Versión
                  </Button>
                </div>

                <Button
                  size="lg"
                  onClick={handleVehicleSearch}
                  className="w-full h-14 bg-[#dcb933] hover:bg-[#c5b82d] text-[#1e2b4c] font-bold text-lg rounded-full shadow-lg"
                >
                  Buscar Neumáticos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            )}

            {searchType === "size" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-[#1e2b4c] mb-2 uppercase">
                    Tamaño de la Llanta
                  </label>
                  <p className="text-sm text-gray-600 mb-4">
                    Ejemplo: 205/55R16
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="Ancho"
                        value={tireSize.width}
                        onChange={(e) =>
                          setTireSize({ ...tireSize, width: e.target.value })
                        }
                        className="h-14 text-lg border-2 border-[#1e2b4c]/20 focus:border-[#dcb933] text-center"
                      />
                      <p className="text-xs text-gray-500 mt-1 text-center">205</p>
                    </div>
                    <div>
                      <Input
                        type="text"
                        placeholder="Perfil"
                        value={tireSize.ratio}
                        onChange={(e) =>
                          setTireSize({ ...tireSize, ratio: e.target.value })
                        }
                        className="h-14 text-lg border-2 border-[#1e2b4c]/20 focus:border-[#dcb933] text-center"
                      />
                      <p className="text-xs text-gray-500 mt-1 text-center">55</p>
                    </div>
                    <div>
                      <Input
                        type="text"
                        placeholder="Aro"
                        value={tireSize.diameter}
                        onChange={(e) =>
                          setTireSize({ ...tireSize, diameter: e.target.value })
                        }
                        className="h-14 text-lg border-2 border-[#1e2b4c]/20 focus:border-[#dcb933] text-center"
                      />
                      <p className="text-xs text-gray-500 mt-1 text-center">R16</p>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  onClick={handleSizeSearch}
                  className="w-full h-14 bg-[#dcb933] hover:bg-[#c5b82d] text-[#1e2b4c] font-bold text-lg rounded-full shadow-lg"
                >
                  Buscar por Tamaño
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            )}
          </div>

          {/* Botón Secundario */}
          <div className="mt-8 flex justify-center animate-fade-in-delay-2">
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