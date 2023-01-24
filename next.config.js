/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "/pdf-editor" : "",
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
