const environmental_portfolio_plansController = require('../controllers/environmental_portfolio_plans');

module.exports = function (app) {
  app.get('/api/environmental_portfolio_plans', environmental_portfolio_plansController.all);
  app.get('/api/environmental_portfolio_plans/:id', environmental_portfolio_plansController.getOne);
  app.post('/api/environmental_portfolio_plans', environmental_portfolio_plansController.create);
  app.delete('/api/environmental_portfolio_plans/:id', environmental_portfolio_plansController.delete);
  app.put('/api/environmental_portfolio_plans/:id', environmental_portfolio_plansController.update);
}