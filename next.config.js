/** @type {import('next').NextConfig} */
const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './src/theme.config.tsx',
})

module.exports = withNextra({
    async redirects() {
        return [
            {
                source: '/msfs/utils/navigraphHub',
                destination: '/msfs/utils/navigraph-hub',
                permanent: true,
            },
            {
                source: '/msfs/utils/navigraphSimlink',
                destination: '/msfs/utils/navigraph-simlink',
                permanent: true,
            }
        ]
    }
})
