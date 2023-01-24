/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://waynechoidev.github.io/pdf-editor/"
      : "",
};

module.exports = nextConfig;
