module.exports = ({ env }) => ({
  port: 10000,
  production: true,
  proxy: {
    enabled: false,
  },
  cron: {
    enabled: false,
  },
  admin: {
    autoOpen: false,
  },
});
