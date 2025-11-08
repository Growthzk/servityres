import { Card, CardContent } from "@/components/ui/card";
import {
  Gauge,
  Settings,
  Wrench,
  Shield,
  Clock,
  Award,
} from "lucide-react";

const services = [
  {
    icon: Gauge,
    title: "Alineación",
    description:
      "Alineación computarizada de precisión para garantizar el mejor rendimiento y desgaste uniforme de tus neumáticos.",
  },
  {
    icon: Settings,
    title: "Balanceo",
    description:
      "Balanceo profesional que elimina vibraciones y prolonga la vida útil de tus llantas y suspensión.",
  },
  {
    icon: Wrench,
    title: "Montaje y Desmontaje",
    description:
      "Servicio especializado de montaje y desmontaje de neumáticos con equipos de última generación.",
  },
  {
    icon: Shield,
    title: "Venta de Neumáticos",
    description:
      "Amplio inventario de todas las referencias y marcas premium del mercado con garantía de calidad.",
  },
  {
    icon: Clock,
    title: "Servicio Rápido",
    description:
      "Atención inmediata sin cita previa. Tu tiempo es valioso, por eso trabajamos con eficiencia.",
  },
  {
    icon: Award,
    title: "Garantía",
    description:
      "Todos nuestros productos y servicios cuentan con garantía respaldada por las mejores marcas.",
  },
];

const testimonials = [
  {
    name: "Carlos Rodríguez",
    text: "Excelente servicio y atención. Las mejores llantas al mejor precio. Totalmente recomendado.",
    rating: 5,
  },
  {
    name: "María González",
    text: "Profesionalismo y rapidez. Encontré exactamente lo que buscaba y el servicio fue impecable.",
    rating: 5,
  },
  {
    name: "Juan Pérez",
    text: "Llevo años comprando aquí. La calidad y el servicio siempre han sido excepcionales.",
    rating: 5,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            NUESTROS SERVICIOS
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            Servicio <span className="text-primary">Integral</span> para tu
            Vehículo
          </h2>
          <p className="text-lg text-gray-600">
            Ofrecemos una gama completa de servicios automotrices con tecnología
            de punta y personal altamente capacitado.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary"
              >
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                    <Icon className="h-8 w-8 text-primary group-hover:text-black transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Testimonials Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-black mb-4">
              Lo que dicen nuestros <span className="text-primary">clientes</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white border-2 hover:border-primary transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 fill-primary text-primary"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-bold text-black">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Promo Image */}
        <div className="mt-20">
          <Card className="overflow-hidden border-4 border-primary">
            <img
              src="/images/promo-referencias.jpeg"
              alt="Todas las referencias de llantas"
              className="w-full h-auto"
            />
          </Card>
        </div>
      </div>
    </section>
  );
}
