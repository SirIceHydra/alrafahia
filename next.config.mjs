// next.config.mjs
import PWA from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */
const baseConfig = {
  output: "standalone",
  // Optional: tighten dev file watching a bit
  webpack: (config, { dev }) => {
    if (dev) {
      // These hints help on some Windows setups; harmless elsewhere
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: ['**/node_modules/**', '**/.next/**']
      };
    }
    return config;
  },
};

// Only apply the PWA wrapper in production
const withPWA = PWA({
  dest: "public",
  cacheOnFrontEndNav: false,
  aggressiveFrontEndNavCaching: false,
  reloadOnOnline: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === "development",
  workboxOptions: { disableDevLogs: true },
});

const isProd = process.env.NODE_ENV === "production";
export default isProd ? withPWA(baseConfig) : baseConfig;
