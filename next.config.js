/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',
            },
        ],
    },
    eslint: {
        ignoreDuringBuilds: false,
    },
}

module.exports = nextConfig
