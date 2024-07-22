/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    // specify remotes
    dashboard: `dashboard@${process.env.NEXT_PUBLIC_DASHBOARD_URL}/_next/static/${location}/remoteEntry.js`,
    settings: `settings@${process.env.NEXT_PUBLIC_SETTINGS_URL}/_next/static/${location}/remoteEntry.js`,
    users: `users@${process.env.NEXT_PUBLIC_USERS_URL}/_next/static/${location}/remoteEntry.js`,
    shared: `shared@${process.env.NEXT_PUBLIC_SHARED_URL}/_next/static/${location}/remoteEntry.js`,
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
