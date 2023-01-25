/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/next-ssg-boilerplate" : "",
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
