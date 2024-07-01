/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/v0/b/bykurtz-website.appspot.com/o/**',
      },
    ],
    unoptimized: true, 
  },
  output: 'export'
};

export default nextConfig;
