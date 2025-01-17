/** @type {import('next').NextConfig} */
const nextConfig = {
    // your other config options
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        });
        return config;
      },
    eslint: {
      // Disable specific ESLint rules project-wide
      ignoreDuringBuilds: true,
    },
  
  };
  
  export default nextConfig;