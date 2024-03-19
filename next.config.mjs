/** @type {import('next').NextConfig} */
// Recognize production env and use repo slug as path
// -> static files are now properly found on prod AND local etc.
const isProduction = process.env.GITHUB_ACTIONS || false;
const path = isProduction ? '/react-merge-board' : '';

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath: path,
  assetPrefix: path,
};

export default nextConfig;
