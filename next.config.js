/** @type {










import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  compiler: {
    styledComponents: true,
  },
  distDir: 'out',
  images: { unoptimized: true },
}

module.exports = nextConfig
