import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const products = [
  {
    id: 1,
    brand: "PIRELLI",
    model: "P Zero",
    image: "/images/persona-llantas.jpeg",
    features: [
      "Alto rendimiento",
      "Excelente agarre",
      "Diseño deportivo",
    ],
    category: "Performance",
  },
  {
    id: 2,
    brand: "GOODYEAR",
    model: "Eagle F1",
    image: "/images/persona-llantas.jpeg",
    features: [
      "Tecnología avanzada",
      "Mayor durabilidad",
      "Confort superior",
    ],
    category: "Premium",
  },
  {
    id: 3,
    brand: "YOKOHAMA",
    model: "BluEarth",
    image: "/images/persona-llantas.jpeg",
    features: [
      "Eco-friendly",
      "Bajo consumo",
      "Silencioso",
    ],
    category: "Ecológico",
  },
  {
    id: 4,
    brand: "BRIDGESTONE",
    model: "Turanza",
    image: "/images/persona-llantas.jpeg",
    features: [
      "Confort máximo",
      "Larga vida útil",
      "Seguridad garantizada",
    ],
    category: "Touring",
  },
];

export default function ProductsGrid() {
  return (
    <section id="productos" className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            NUESTROS PRODUCTOS
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            Neumáticos de <span className="text-primary">Primera Calidad</span>
          </h2>
          <p className="text-lg text-gray-600">
            Trabajamos con las marcas más reconocidas del mercado para ofrecerte
            la mejor calidad y rendimiento para tu vehículo.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative overflow-hidden bg-gray-100 aspect-square">
                  <img
                    src={product.image}
                    alt={`${product.brand} ${product.model}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-black px-3 py-1 rounded-full text-xs font-bold">
                    {product.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-black text-black">
                      {product.brand}
                    </h3>
                    <p className="text-gray-600 font-medium">{product.model}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-2 text-sm text-gray-700"
                      >
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className="w-full bg-black hover:bg-primary text-white hover:text-black font-bold transition-all"
                    onClick={() => {
                      const element = document.getElementById("contacto");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Cotizar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            ¿Buscas una referencia específica?
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-black font-bold"
            onClick={() => {
              const element = document.getElementById("contacto");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Consultar Disponibilidad
          </Button>
        </div>
      </div>
    </section>
  );
}
