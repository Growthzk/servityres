# Servityres S.A.S - Landing Page

Sitio web profesional para Servityres S.A.S, una empresa especializada en la venta y distribución de llantas de alta calidad en Santiago de Cali, Colombia.

## 🎯 Características

- **Diseño Moderno y Responsivo**: Interfaz limpia y profesional que se adapta a todos los dispositivos
- **Sistema de Búsqueda de Llantas**: Búsqueda por vehículo o por tamaño de llanta
- **Carrusel de Productos**: Galería interactiva con 111 imágenes de llantas
- **Mapa de Google**: Ubicación exacta integrada del local
- **Formulario de Contacto**: Integración con WhatsApp para consultas rápidas
- **Animaciones Suaves**: Efectos visuales con Framer Motion
- **SEO Optimizado**: Meta tags y estructura semántica

## 🛠️ Tecnologías Utilizadas

- **React 19**: Framework de UI
- **TypeScript**: Lenguaje tipado
- **Tailwind CSS v4**: Estilos y diseño responsivo
- **Framer Motion**: Animaciones avanzadas
- **Vite**: Bundler y servidor de desarrollo
- **shadcn/ui**: Componentes UI reutilizables
- **Wouter**: Enrutamiento ligero

## 📋 Requisitos Previos

- Node.js 18+ 
- pnpm (gestor de paquetes)

## 🚀 Instalación y Ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/servityres-landing-page.git
cd servityres
```

### 2. Instalar dependencias

```bash
pnpm install
```

### 3. Ejecutar en desarrollo

```bash
pnpm dev
```

El sitio estará disponible en `http://localhost:3000`

### 4. Compilar para producción

```bash
pnpm build
```

### 5. Previsualizar la compilación

```bash
pnpm preview
```

## 📁 Estructura del Proyecto

```
servityres/
├── client/                          # Código frontend
│   ├── public/
│   │   └── images/                 # Imágenes del sitio
│   │       ├── llantas/           # 111 imágenes de llantas
│   │       └── *.jpeg             # Imágenes principales
│   ├── src/
│   │   ├── components/            # Componentes React
│   │   │   ├── Header.tsx         # Barra de navegación
│   │   │   ├── Hero.tsx           # Sección hero con búsqueda
│   │   │   ├── ProductsGrid.tsx   # Grid de productos
│   │   │   ├── Carousel.tsx       # Carrusel de llantas
│   │   │   ├── Services.tsx       # Servicios automotrices
│   │   │   ├── Location.tsx       # Ubicación y mapa
│   │   │   ├── Contact.tsx        # Formulario de contacto
│   │   │   ├── Footer.tsx         # Pie de página
│   │   │   └── ui/               # Componentes shadcn/ui
│   │   ├── pages/                 # Páginas
│   │   │   ├── Home.tsx          # Página principal
│   │   │   └── NotFound.tsx      # Página 404
│   │   ├── contexts/              # Contextos React
│   │   ├── hooks/                 # Hooks personalizados
│   │   ├── lib/                   # Utilidades
│   │   ├── App.tsx               # Componente raíz
│   │   ├── main.tsx              # Punto de entrada
│   │   └── index.css             # Estilos globales
│   ├── index.html                # HTML principal
│   └── vite.config.ts            # Configuración Vite
├── server/                        # Placeholder para backend
├── shared/                        # Código compartido
├── package.json                   # Dependencias
├── pnpm-lock.yaml                # Lock file
├── tsconfig.json                 # Configuración TypeScript
├── tailwind.config.ts            # Configuración Tailwind
├── components.json               # Configuración shadcn/ui
└── README.md                     # Este archivo
```

## 🎨 Paleta de Colores

- **Primario (Amarillo/Dorado)**: `#FFC107` - Usado para acentos y CTAs
- **Secundario (Negro)**: `#000000` - Fondo y texto principal
- **Terciario (Gris)**: `#6B7280` - Texto secundario

## 📱 Secciones del Sitio

### 1. **Header**
- Logo de Servityres
- Navegación principal
- Botón "Cotizar Ahora"

### 2. **Hero**
- Búsqueda de llantas por vehículo
- Búsqueda por tamaño/referencia
- Imagen del local

### 3. **Productos**
- Grid de marcas premium (Goodyear, Michelin, etc.)
- Información de productos

### 4. **Carrusel de Llantas**
- 111 imágenes de llantas
- Navegación con botones
- Miniaturas seleccionables
- Autoplay cada 5 segundos

### 5. **Servicios**
- Servicios automotrices
- Beneficios de cada servicio

### 6. **Ubicación**
- Dirección: Avenida 8va Norte #15an-06, Santiago de Cali
- Mapa de Google interactivo
- Horario de atención
- Teléfonos de contacto

### 7. **Contacto**
- Formulario de contacto
- Integración con WhatsApp

### 8. **Footer**
- Enlaces rápidos
- Redes sociales
- Información de copyright

## 🔧 Configuración Importante

### Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto (si es necesario):

```env
VITE_APP_TITLE=Servityres S.A.S
VITE_APP_LOGO=/images/logo-servityres.jpeg
```

### Personalización

Para personalizar el sitio:

1. **Logo**: Reemplaza `/client/public/images/logo-servityres.jpeg`
2. **Colores**: Edita `client/src/index.css` (variables CSS)
3. **Contenido**: Modifica los componentes en `client/src/components/`
4. **Imágenes**: Agrega nuevas imágenes a `client/public/images/`

## 📞 Contacto e Información

- **Empresa**: Servityres S.A.S
- **Ubicación**: Avenida 8va Norte #15an-06, Santiago de Cali, Colombia
- **Teléfonos**: 317 600 9000 / 305 746 7001
- **Horario**: Lunes a Viernes 8:00 AM - 6:00 PM | Sábados 8:00 AM - 5:00 PM

## 📄 Licencia

Este proyecto está bajo licencia MIT. Ver archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

Desarrollado por Manus AI para Servityres S.A.S

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerencias y mejoras.

## 📝 Notas de Desarrollo

- El proyecto usa **pnpm** como gestor de paquetes
- Las imágenes están optimizadas para web
- El sitio es completamente responsive
- Se incluyen animaciones suaves con Framer Motion
- El mapa de Google está integrado con embed iframe

## 🐛 Reportar Problemas

Si encuentras algún problema, por favor abre un issue en el repositorio.

---

**Última actualización**: Noviembre 2025
