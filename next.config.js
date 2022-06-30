const withPWA = require('next-pwa')

module.exports = withPWA({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  // reactStrictMode:true,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    swSrc: 'service-worker.js',
  }
});


