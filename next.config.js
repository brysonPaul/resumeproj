/**
* @type {import('next').NextConfig}
*/
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  // For deployment to GitHub Pages
  assetPrefix: isProd ? '/my-next-app/' : '',
  basePath: isProd ? '/my-next-app' : '',
};
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
};

