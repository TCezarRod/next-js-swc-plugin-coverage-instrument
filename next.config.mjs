/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [["swc-plugin-coverage-instrument", {}]]
  },
  reactStrictMode: true,
};

export default nextConfig;
