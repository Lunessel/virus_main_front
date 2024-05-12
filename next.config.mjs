/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // unoptimized: true,
        domains: ['34.118.102.90'],
        formats: ["image/webp", "image/avif"],
    }
};

export default nextConfig;
