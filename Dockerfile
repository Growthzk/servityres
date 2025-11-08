# Usa Node.js 20 (oficial, ligero y compatible)
FROM node:20-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia package.json y pnpm-lock.yaml primero (para caché eficiente)
COPY package.json pnpm-lock.yaml ./

# Instala pnpm globalmente
RUN npm install -g pnpm@10

# Instala dependencias (sin devDependencies en producción)
RUN pnpm install --prod=false --frozen-lockfile

# Copia todo el código fuente
COPY . .

# Ejecuta el build (genera dist/public y dist/index.js)
RUN pnpm run build

# Expón el puerto (buenas prácticas, aunque Dokploy lo ignore)
EXPOSE 3000

# Inicia tu servidor Express
CMD ["node", "dist/index.js"]
