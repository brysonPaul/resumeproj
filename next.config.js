/**
* @type {import('next').NextConfig}
*/
const isProd = process.env.NODE_ENV === 'production';


const nextConfig = {
  output: 'export',
  images: {
    loader: 'akamai',
    unoptimized: true,
    path: '/resumeproj/',
  },
  assetPrefix:'/resumeproj/',
  basePath: '/resumeproj',
};

module.exports = nextConfig;
