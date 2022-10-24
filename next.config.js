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
  async headers() {
    return [
      {
        // matching all API routes
        source: '/~partytown/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
};
