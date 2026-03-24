// next.config.js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uwhjokhegcwnjcxiuvvd.supabase.co",
      },
    ],
  },
}

module.exports = nextConfig