/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_CLIENT_ID: 'secret-id',
    GOOGLE_CLIENT_SECRET: 'secret'
  }
}

module.exports = nextConfig
