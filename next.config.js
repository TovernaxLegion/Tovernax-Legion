/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output for Cloudflare Pages / static hosting
  output: "export",
  trailingSlash: true,
  
  // Image optimization config
  images: {
    unoptimized: true, // Required for static export
    formats: ["image/avif", "image/webp"],
  },

  // Strict mode for better DX
  reactStrictMode: true,

  // Environment variables
  env: {
    SITE_NAME: "Tovernax Academy",
    SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://academy.tovernax.com",
  },

  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Headers for security
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
