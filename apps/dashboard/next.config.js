/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'dashboard',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './charts': './src/components/charts/index.tsx',
          './reqres': './src/components/reqres.tsx'
        },
        extraOptions: {
          exposePages: true
        },
        shared: {
          tailwindcss: {
            eager: true,
            singleton: true,
            requiredVersion: false,
          },
          recharts: {
            eager: true,
            singleton: true,
            requiredVersion: false,
          },
        },
      })
    );

    return config;
  },
  transpilePackages: ["@repo/ui"],
};
