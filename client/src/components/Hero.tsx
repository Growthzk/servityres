import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Car, Ruler } from "lucide-react";
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
      toast.error("Por favor completa al menos el año y la marca del vehículo");
      return;
    }
    toast.success("Buscando neumáticos para tu vehículo...");
    // Aquí iría la lógica de búsqueda real
  };

  const handleSizeSearch = () => {
    if (!tireSize.width || !tireSize.ratio || !tireSize.diameter) {
      toast.error("Por favor completa todos los campos del tamaño de llanta");
      return;
    }
    toast.success(`Buscando llantas ${tireSize.width}/${tireSize.ratio}R${tireSize.diameter}...`);
    // Aquí iría la lógica de búsqueda real
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 30 }, (_, i) => currentYear - i);

  return (
    <section id="hero" className="relative min-h-screen bg-white pt-20">
      <div className="container h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] py-12">
          {/* Left Side - Search Form */}
          <div className="space-y-8">
            {/* Search Type Tabs */}
            <div className="inline-flex bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setSearchType("vehicle")}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  searchType === "vehicle"
                    ? "bg-black text-white"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                <Car className="h-5 w-5" />
                <span>VEHÍCULO</span>
              </button>
              <button
                onClick={() => setSearchType("size")}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  searchType === "size"
                    ? "bg-black text-white"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                <Ruler className="h-5 w-5" />
                <span>TAMAÑO DE LLANTA</span>
              </button>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-black leading-tight mb-4">
                Cuéntanos sobre tu{" "}
                <span className="text-primary">vehículo.</span>
              </h1>
              <p className="text-gray-600 text-lg">
                Todos los campos son requeridos.
              </p>
            </div>

            {/* Vehicle Search Form */}
            {searchType === "vehicle" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-black mb-2 uppercase">
                    Año del Vehículo
                  </label>
                  <Select
                    value={vehicleData.year}
                    onValueChange={(value) =>
                      setVehicleData({ ...vehicleData, year: value })
                    }
                  >
                    <SelectTrigger className="h-14 text-lg border-2 border-gray-300 focus:border-primary">
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
                    className="h-14 border-2 border-gray-300 hover:border-primary font-bold"
                    onClick={() => toast.info("Selecciona la marca")}
                  >
                    Marca
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-14 border-2 border-gray-300 hover:border-primary font-bold"
                    onClick={() => toast.info("Selecciona el modelo")}
                  >
                    Modelo
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-14 border-2 border-gray-300 hover:border-primary font-bold"
                    onClick={() => toast.info("Selecciona la versión")}
                  >
                    Versión
                  </Button>
                </div>

                <Button
                  size="lg"
                  onClick={handleVehicleSearch}
                  className="w-full h-14 bg-primary hover:bg-primary/90 text-black font-bold text-lg"
                >
                  Buscar Neumáticos →
                </Button>

                <p className="text-sm text-gray-600">
                  ¿No estás seguro? Busca por{" "}
                  <button
                    onClick={() => toast.info("Próximamente")}
                    className="text-primary font-semibold hover:underline"
                  >
                    Número de Placa
                  </button>{" "}
                  o{" "}
                  <button
                    onClick={() => toast.info("Próximamente")}
                    className="text-primary font-semibold hover:underline"
                  >
                    VIN
                  </button>{" "}
                  o busca{" "}
                  <button
                    onClick={() => toast.info("Próximamente")}
                    className="text-primary font-semibold hover:underline"
                  >
                    Llantas para Remolque
                  </button>
                </p>
              </div>
            )}

            {/* Tire Size Search Form */}
            {searchType === "size" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-black mb-2 uppercase">
                    Tamaño de la Llanta
                  </label>
                  <p className="text-sm text-gray-600 mb-4">
                    Ejemplo: 205/55R16 (Ancho/Perfil R Diámetro)
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
                        className="h-14 text-lg border-2 border-gray-300 focus:border-primary text-center"
                      />
                      <p className="text-xs text-gray-500 mt-1 text-center">
                        205
                      </p>
                    </div>
                    <div>
                      <Input
                        type="text"
                        placeholder="Perfil"
                        value={tireSize.ratio}
                        onChange={(e) =>
                          setTireSize({ ...tireSize, ratio: e.target.value })
                        }
                        className="h-14 text-lg border-2 border-gray-300 focus:border-primary text-center"
                      />
                      <p className="text-xs text-gray-500 mt-1 text-center">
                        55
                      </p>
                    </div>
                    <div>
                      <Input
                        type="text"
                        placeholder="Aro"
                        value={tireSize.diameter}
                        onChange={(e) =>
                          setTireSize({
                            ...tireSize,
                            diameter: e.target.value,
                          })
                        }
                        className="h-14 text-lg border-2 border-gray-300 focus:border-primary text-center"
                      />
                      <p className="text-xs text-gray-500 mt-1 text-center">
                        R16
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  onClick={handleSizeSearch}
                  className="w-full h-14 bg-primary hover:bg-primary/90 text-black font-bold text-lg"
                >
                  Buscar por Tamaño →
                </Button>

                <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-black mb-3">
                    ¿Dónde encuentro el tamaño de mi llanta?
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    El tamaño está impreso en el costado de tu llanta actual.
                    Busca una secuencia como "205/55R16" o "P215/65R15".
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Image */}
          <div className="relative h-full min-h-[500px] lg:min-h-[700px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/local-exterior.jpeg"
                alt="Servityres Local"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="bg-primary rounded-full p-3">
                  <Car className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-black text-lg">
                    Todas las Referencias
                  </h3>
                  <p className="text-sm text-gray-600">
                    Pirelli • Goodyear • Yokohama • Bridgestone
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
