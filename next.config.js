/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['res.cloudinary.com'],
  },
  reactStrictMode: true,
  // webpack: (config) => {
  //   config.resolve.fallback = { fs: false, child_process: false };
  //   return config;
  // },
}
