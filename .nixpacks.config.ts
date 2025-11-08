import { Nixpacks } from "nixpacks";

export default {
  setup: [
    // Instala explícitamente Node.js 20 desde nixpkgs
    "nix-env -iA nixpkgs.nodejs_20",
    // Instala pnpm
    "nix-env -iA nixpkgs.pnpm",
  ],
  install: [
    // Habilita corepack (opcional, pero recomendado)
    "corepack enable",
    // Instala dependencias
    "pnpm i --frozen-lockfile",
  ],
  build: [
    // Ejecuta el script de build
    "pnpm run build",
  ],
  start: [
    // Inicia el servidor
    "node dist/index.js",
  ],
} as Nixpacks;
