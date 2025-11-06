import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function Location() {
  return (
    <section id="ubicacion" className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ENCUÉNTRANOS
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            Nuestra <span className="text-primary">Ubicación</span>
          </h2>
          <p className="text-lg text-gray-600">
            Visítanos en nuestro local en Santiago de Cali. Estamos listos para atenderte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">
                      Dirección
                    </h3>
                    <p className="text-gray-700">
                      Avenida 8va Norte #15an-06<br />
                      Santiago de Cali<br />
                      Valle del Cauca<br />
                      Colombia
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">
                      Teléfonos
                    </h3>
                    <div className="space-y-2">
                      <a
                        href="tel:+573176009000"
                        className="block text-gray-700 hover:text-primary transition-colors"
                      >
                        317 600 9000
                      </a>
                      <a
                        href="tel:+573057467001"
                        className="block text-gray-700 hover:text-primary transition-colors"
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
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">
                      Horario de Atención
                    </h3>
                    <div className="space-y-1 text-gray-700">
                      <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                      <p>Sábados: 8:00 AM - 5:00 PM</p>
                      <p>Domingos: Cerrado</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary bg-primary/5">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">
                      Atención Sin Cita Previa
                    </h3>
                    <p className="text-gray-700">
                      No necesitas agendar. Visítanos directamente y te
                      atenderemos de inmediato.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map and Image */}
          <div className="space-y-6">
            <Card className="overflow-hidden border-4 border-primary">
              <img
                src="/images/local-exterior.jpeg"
                alt="Local Servityres"
                className="w-full h-auto"
              />
            </Card>

            {/* Google Map */}
            <Card className="overflow-hidden border-2">
              <CardContent className="p-0">
                <iframe
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5234!2d-76.5197!3d3.4372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6f5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sAvenida%208va%20Norte%2015an-06%2C%20Santiago%20de%20Cali%2C%20Valle%20del%20Cauca%2C%20Colombia!5e0!3m2!1ses-419!2s!4v1730000000000"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
