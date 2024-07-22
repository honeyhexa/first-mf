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
          './table': './src/components/table/index.tsx',
          './avatar': './src/components/avatar/index.tsx',
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
        },
      })
    );

    return config;
  },
  transpilePackages: ["@repo/ui"],
};
