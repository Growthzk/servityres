// server/index.ts
import express from "express";
import { createServer } from "http";
import path from "path";

const app = express();
const server = createServer(app);

// Sirve archivos estáticos desde dist/public
const publicDir = path.resolve(process.cwd(), "dist", "public");
app.use(express.static(publicDir, { index: false }));

// Maneja rutas SPA (fallback a index.html)
app.get("*", (_req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

// Escucha en el puerto que Dokploy asigna
const port = process.env.PORT || 3000;
server.listen(port, "0.0.0.0", () => {
  console.log(`✅ Servidor listo en puerto ${port}`);
});
