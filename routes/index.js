/*
 * Connect all of your endpoints together here.
 */
module.exports = function (app, router) {
  app.use('/api', require('./users.js')(router));
  app.use('/api', require('./houses.js')(router));
  app.use('/api', require('./house.js')(router));
  app.use('/api', require('./user.js')(router));
};