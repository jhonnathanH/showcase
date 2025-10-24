/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Usamos remotePatterns para mayor seguridad, especificando hostname.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn4.iconfinder.com', // ⬅️ Este es el dominio que debes permitir
        port: '',
        pathname: '/data/icons/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn0.iconfinder.com', // ⬅️ Nuevo hostname
        port: '',
        pathname: '/data/icons/**', // Puedes ser más amplio aquí
      },
    ],
    // Si usas una versión antigua (Next.js 12 o inferior), puedes usar 'domains':
    // domains: ['cdn4.iconfinder.com'], 
  },
};

export default nextConfig;
