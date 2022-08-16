/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['raw.githubusercontent.com']
  },
  i18n: {
    locales: ['en-US', 'es'],
    defaultLocale: 'es',
  },
  ...nextTranslate
}

module.exports = nextConfig
