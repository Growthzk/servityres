# Usa Node.js 20 (requerido por Vite 7)
FROM node:20-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia package.json y pnpm-lock.yaml primero (para caché eficiente)
COPY package*.json ./

# Instala pnpm globalmente
RUN npm install -g pnpm@10

# Instala dependencias
RUN pnpm install --frozen-lockfile

# Copia todo el código fuente
COPY . .

# Ejecuta el build
RUN pnpm run build

# Expone el puerto (buenas prácticas)
EXPOSE 3000

# Inicia tu servidor Express
CMD ["node", "dist/index.js"]
