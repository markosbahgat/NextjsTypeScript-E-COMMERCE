/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');

const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: { domains: ['fakestoreapi.com'] },
  trailingSlash: true,
  future: {
    webpack5: true
  },
}

module.exports = nextConfig