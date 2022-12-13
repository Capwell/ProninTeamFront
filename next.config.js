/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  compiler: {
    styledComponents: true,
  },
  images: {
    deviceSizes: [320, 575, 767, 991, 1150],
    domains: [
      'proninteam.ru',
    ],
    unoptimized: true,
  }
}

module.exports = nextConfig
