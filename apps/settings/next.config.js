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
          './stats': './src/components/stats/index.tsx',
          './user': './src/components/user/index.tsx',
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
        },
      })
    );

    return config;
  },
  transpilePackages: ["@repo/ui"],
};
