import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Mail, MapPin, Phone, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary hover:bg-primary/90 text-black p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Volver arriba"
      >
        <ArrowUp className="h-6 w-6" />
      </button>

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/images/logo-servityres.jpeg"
                alt="Servityres Logo"
                className="h-16 w-16 object-contain rounded-lg"
              />
              <div>
                <h3 className="text-2xl font-black">
                  SERVI<span className="text-primary">TYRES</span>
                </h3>
                <p className="text-sm text-gray-400">S.A.S</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tu tienda de confianza para neumáticos y servicios automotrices en
              Cúcuta. Todas las referencias, todas las marcas.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary text-white hover:text-black p-2 rounded-lg transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary text-white hover:text-black p-2 rounded-lg transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-primary">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("productos")}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Productos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("ubicacion")}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Ubicación
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-primary">
              Marcas que Manejamos
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>• Pirelli</li>
              <li>• Goodyear</li>
              <li>• Yokohama</li>
              <li>• Bridgestone</li>
              <li>• Michelin</li>
              <li>• Continental</li>
              <li>• Y muchas más...</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-primary">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">
                  Av. 1E #11-85<br />
                  La Riviera, Cúcuta
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-400 space-y-1">
                  <a
                    href="tel:+573176009000"
                    className="block hover:text-primary transition-colors"
                  >
                    317 600 9000
                  </a>
                  <a
                    href="tel:+573057467001"
                    className="block hover:text-primary transition-colors"
                  >
                    305 746 7001
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">
                  Lun - Vie: 8AM - 6PM<br />
                  Sáb: 8AM - 5PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Servityres S.A.S. Todos los derechos
              reservados.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <button className="hover:text-primary transition-colors">
                Términos y Condiciones
              </button>
              <button className="hover:text-primary transition-colors">
                Política de Privacidad
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
