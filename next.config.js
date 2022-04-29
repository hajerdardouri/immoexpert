const { i18n } = require("./next.config");

module.exports = {
  reactStrictMode: true,
  i18n,
  async rewrites() {
    return [
      {
        source: "/api/:slug",
        destination: "http://0.0.0.0:8082/api/:slug",
      },
    ];
  },
};
