/** @type {









import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  compiler: {
    styledComponents: true,
  },
  distDir: 'build',
  images: { unoptimized: true },
}

module.exports = nextConfig
