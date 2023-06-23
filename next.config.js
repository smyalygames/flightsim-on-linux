/** @type {import('next').NextConfig} */
const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './src/theme.config.tsx'
})

module.exports = withNextra()
