/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'luis-liberty.s3.us-east-2.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
