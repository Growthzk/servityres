import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const whatsappMessage = `Hola, mi nombre es ${formData.name}.%0A%0ATeléfono: ${formData.phone}%0AEmail: ${formData.email}%0A%0AMensaje: ${formData.message}`;
    const whatsappUrl = `https://wa.me/573176009000?text=${whatsappMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    
    toast.success("Redirigiendo a WhatsApp...");
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            CONTÁCTANOS
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            ¿Listo para <span className="text-primary">Cotizar</span>?
          </h2>
          <p className="text-lg text-gray-600">
            Déjanos tus datos y te contactaremos inmediatamente para ofrecerte
            la mejor opción para tu vehículo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-2">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-black mb-2"
                  >
                    Nombre Completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="border-2 focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-black mb-2"
                  >
                    Teléfono *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="300 123 4567"
                    className="border-2 focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-black mb-2"
                  >
                    Correo Electrónico
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="border-2 focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-black mb-2"
                  >
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="¿Qué tipo de neumáticos necesitas? ¿Para qué vehículo?"
                    rows={5}
                    className="border-2 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-black font-bold"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Enviar por WhatsApp
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Al enviar este formulario, serás redirigido a WhatsApp para
                  completar tu consulta.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Quick Contact Options */}
          <div className="space-y-6">
            <Card className="border-2 hover:border-primary transition-all duration-300 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-4 rounded-2xl">
                    <Phone className="h-8 w-8 text-black" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-black mb-3">
                      Llámanos Ahora
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Atención inmediata por teléfono. Nuestro equipo está listo
                      para ayudarte.
                    </p>
                    <div className="space-y-2">
                      <a
                        href="tel:+573176009000"
                        className="block text-xl font-bold text-primary hover:text-primary/80 transition-colors"
                      >
                        317 600 9000
                      </a>
                      <a
                        href="tel:+573057467001"
                        className="block text-xl font-bold text-primary hover:text-primary/80 transition-colors"
                      >
                        305 746 7001
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 p-4 rounded-2xl">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-black mb-3">
                      WhatsApp Directo
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Chatea con nosotros directamente por WhatsApp para una
                      respuesta rápida.
                    </p>
                    <Button
                      size="lg"
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-bold"
                      onClick={() =>
                        window.open("https://wa.me/573176009000", "_blank")
                      }
                    >
                      Abrir WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 bg-black text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  ¿Por qué elegirnos?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Todas las referencias disponibles</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Marcas premium garantizadas</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Servicio técnico especializado</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Precios competitivos</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Atención personalizada</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
