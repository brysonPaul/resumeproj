/**
* @type {import('next').NextConfig}
*/
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  // For deployment to GitHub Pages
  assetPrefix: isProd ? '/resumeproj/' : '',
  basePath: isProd ? '/resumeproj' : '',
};
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
};

