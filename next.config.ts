import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Tests depuis un tunnel : sans ça, le serveur de dev refuse les requêtes
     dont l'Origin n'est pas localhost et la page n'hydrate jamais. */
  allowedDevOrigins: ["*.trycloudflare.com", "*.ngrok-free.dev"],
};

export default nextConfig;
