/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'settings',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './stats': './src/components/stats/index.tsx'  
        },
      })
    );

    return config;
  },
  transpilePackages: ["@repo/ui"],
};
