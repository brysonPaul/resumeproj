/**
* @type {import('next').NextConfig}
*/
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  images: {
    loader: 'akamai',
    unoptimized: true,
    path: '/resumeproj/',
  },
  assetPrefix:'/resumeproj/',
  basePath: '/resumeproj/',
};
