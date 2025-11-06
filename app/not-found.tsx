// app/not-found.tsx
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home, MessageCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <Card className="w-full max-w-lg mx-4 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-red-100 rounded-full animate-pulse" />
              <AlertCircle className="relative h-16 w-16 text-red-500" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-slate-900 mb-2">404</h1>

          <h2 className="text-xl font-semibold text-slate-700 mb-4">
            Page Not Found
          </h2>

          <p className="text-slate-600 mb-8 leading-relaxed">
            Lo sentimos, la página que buscas no existe.
            <br />
            Puede haber sido movida o eliminada.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleGoHome}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              Volver al Inicio
            </Button>

            <Button asChild variant="outline" className="flex items-center gap-2">
              <Link 
                href="https://wa.me/57TU_NUMERO_AQUI" 
                target="_blank"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Contactar WhatsApp
              </Link>
            </Button>
          </div>

          <p className="mt-8 text-xs text-slate-500">
            © 2025 ServiTyres S.A.S. | Avenida 8va No. XX-XX, Cali, Colombia
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
