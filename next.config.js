/** @type {






import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  compiler: {
    styledComponents: true,
  },
  distDir: 'build',
}

module.exports = nextConfig
