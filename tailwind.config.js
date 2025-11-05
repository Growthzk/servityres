/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.svg",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: "#FFD60A",     // Amarillo principal (botones)
        secondary: "#FFC300",   // Amarillo secundario
        dark: "#000000",        // Texto principal
        light: "#FFFFFF",       // Fondo claro
        goldLight: "#EDC531",   // Detalles
        gold: "#DBB42C",        // Bordes
        brown: "#76520E",       // Texto secundario
        graySoft: "#C1BDB3",    // Texto suave
        success: "#ECF39E",     // Éxito
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-delay': 'fadeIn 0.6s ease-out 0.2s both',
        'fade-in-delay-2': 'fadeIn 0.6s ease-out 0.4s both',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23C1BDB3\' fill-opacity=\'0.15\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M0 40L40 0H20L0 20M40 40V20L20 40\'/%3E%3C/g%3E%3C/svg%3E")',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}; 