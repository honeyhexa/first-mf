/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    // specify remotes
    dashboard: `dashboard@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
    settings: `settings@http://localhost:3002/_next/static/${location}/remoteEntry.js`,
    users: `users@http://localhost:3003/_next/static/${location}/remoteEntry.js`,
    shared: `shared@http://localhost:3004/_next/static/${location}/remoteEntry.js`,
  };
}

module.exports = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'shell',
        filename: 'static/chunks/remoteEntry.js',
        remotes: remotes(isServer),
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
