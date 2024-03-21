/** @type {import('next').NextConfig} */
const nextConfig = { experimental: {
    async rewrites() {
      return [
        {
          source: '/service-worker.js',
          destination: '/_next/static/service-worker.js',
        },
      ]
    },
    async headers() {
      return [
        {
          source: '/service-worker.js',
          headers: [
            { key: 'Cache-Control', value: 'no-store' },
          ],
        },
      ]
    },
  },};

export default nextConfig;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
