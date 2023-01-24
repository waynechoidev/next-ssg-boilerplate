/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "/pdf-editor" : "",
  basePath: process.env.NODE_ENV === "production" ? "/pdf-editor" : "",
};

module.exports = nextConfig;
