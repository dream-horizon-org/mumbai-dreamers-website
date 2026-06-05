import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  // Sanity Studio v5 uses the React Compiler which requires react/compiler-runtime
  // (a React 19 feature). This alias provides a React 18 compatible polyfill.
  webpack: (config) => {
    config.resolve.alias['react/compiler-runtime'] = path.resolve(
      __dirname,
      'react-compiler-runtime.js',
    )
    return config
  },
};

export default nextConfig;
