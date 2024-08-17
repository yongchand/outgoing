/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mov$/,
      type: 'asset/resource', // Use Next.js's built-in asset/resource handling
      generator: {
        filename: 'static/media/[name].[hash][ext]', // Output directory and naming
      },
    });

    return config;
  },
};

module.exports = nextConfig;