/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/how-it-works",
        destination: "/login",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
