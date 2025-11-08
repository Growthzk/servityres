import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  images: string[];
  title?: string;
  autoplay?: boolean;
  interval?: number;
}

export default function Carousel({
  images,
  title = "Nuestras Llantas",
  autoplay = true,
  interval = 5000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoplay, interval, images.length]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prev) => (prev + newDirection + images.length) % images.length
    );
  };

  return (
    <section id="llantas" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {title}
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Main Image */}
          <div className="relative w-full bg-gray-800 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center" style={{ aspectRatio: '16 / 9' }}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Llanta ${currentIndex + 1}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                }}
                className="w-full h-full object-contain p-4"
              />
            </AnimatePresence>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

            {/* Navigation Buttons */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-black p-3 rounded-full transition-all duration-300 shadow-lg"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => paginate(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-black p-3 rounded-full transition-all duration-300 shadow-lg"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 right-4 bg-black/60 text-primary px-4 py-2 rounded-full text-sm font-bold">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="mt-6 flex gap-2 overflow-x-auto pb-2 px-2 md:px-0">
            {images.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`relative flex-shrink-0 h-20 w-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex
                    ? "border-primary scale-105"
                    : "border-gray-600 hover:border-primary"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 border-2 border-primary rounded-lg"
                    layoutId="active-thumbnail"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="mt-6 flex justify-center gap-2">
            {images.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-gray-600 w-3 hover:bg-gray-500"
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explora nuestra amplia selección de llantas de las mejores marcas.
            Cada imagen representa calidad, durabilidad y rendimiento superior
            para tu vehículo.
          </p>
        </div>
      </div>
    </section>
  );
}
