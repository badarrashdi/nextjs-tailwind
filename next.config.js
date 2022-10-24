module.exports = {
  reactStrictMode: false,
  images: {
    domains: ['a.storyblok.com'],
    deviceSizes: [767, 1080, 1200, 1920],
  },
  // experimental: { esmExternals: false },
  // i18n: {
  //   locales: ["ar", "en"],
  //   defaultLocale: "ar",
  //   localeDetection: false
  // },

  // async redirects() {
  //   return [
  //     {
  //       source: '/about',
  //       destination: '/',
  //       permanent: true,
  //     },
  //   ]
  // },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
