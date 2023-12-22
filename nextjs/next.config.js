/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/static/images/**'
      },
      {
        protocol: 'https',
        hostname: 'pb-v4-backend-a86d54467a96.herokuapp.com',
        port: '',
        pathname: '/static/images/**'
      }
    ]
  }
}

module.exports = nextConfig
