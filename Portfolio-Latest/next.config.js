/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: false
  },
  // Uncomment lines below jika ingin static export
  // output: 'export',
  // trailingSlash: true,
}

module.exports = nextConfig 