/** @type {



import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: '/products/:product',
        destination: '/app/products/:product/page',
      },
    ]
  },
}

module.exports = nextConfig
