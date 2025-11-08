# Usa una imagen oficial de Node.js 20 (o 22 si prefieres)
FROM node:20-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia package.json y pnpm-lock.yaml primero (para caché eficiente)
COPY package.json pnpm-lock.yaml ./

# Instala pnpm globalmente (opcional, pero recomendado)
RUN npm install -g pnpm@10

# Instala dependencias
RUN pnpm install --frozen-lockfile

# Copia todo el código fuente
COPY . .

# Ejecuta el build
RUN pnpm run build

# Expón el puerto (aunque Caddy lo manejará, es buena práctica)
EXPOSE 3000

# Inicia la app
CMD ["pnpm", "start"]
