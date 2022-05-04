module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env('PORT'),
  url: env("URL"),
  app: {
    keys: env.array('APP_KEYS')
  },
});
