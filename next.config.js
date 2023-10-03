/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.ifsp.edu.br'],
  },
  experimental: {
    mdxRs: true,
  },
}
const [withMDX] = [require('@next/mdx')]
module.exports = withMDX(nextConfig)
