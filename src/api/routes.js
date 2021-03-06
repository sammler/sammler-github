const healthRoutes = require('./modules/health/health.routes').routes;
const profileRoutes = require('./modules/profile/profile.routes').routes;

function config(app) {
  app.use('/health-check', healthRoutes());
  app.use('/profiles', profileRoutes());
}

module.exports = {
  config
};
