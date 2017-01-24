module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [{
    name      : "Server",
    script    : "dist/server/bootstrap.js",
    watch: ["dist/server"],
    env_production : {
      NODE_ENV: "production"
    }
  }]
}
