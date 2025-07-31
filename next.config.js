const withNextIntl = require("next-intl/plugin")("./next-intl.config.js");

const config = withNextIntl({
  reactStrictMode: true,

});

config.env = {
  ...config.env,
  _next_intl_trailing_slash: '', 
};

module.exports = config;

