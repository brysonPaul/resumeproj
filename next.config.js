/**
* @type {import('next').NextConfig}
*/
const isProd = process.env.NODE_ENV === 'production';


const nextConfig = {
  output: 'export',
  images: {
    loader: 'akamai',
    unoptimized: true,
    path: '',
  },
  assetPrefix: isProd ? '/resumeproj/' : '',
  basePath: isProd ? '/resumeproj' : '',
};

module.exports = nextConfig;
