/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'users',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './charts': './src/components/charts/index.tsx'  
        },
      })
    );

    return config;
  },
  transpilePackages: ["@repo/ui"],
};
