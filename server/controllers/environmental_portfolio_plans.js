const mongoose = require('mongoose');
const Environmental_Portfolio_Plan = mongoose.model('Environmental_Portfolio_Plan');
const { flattenErrorsToArr } = require('../../helpers');

module.exports = {
  all(request, response) {
    // find all
    Environmental_Portfolio_Plan.find()
      .then((environmental_portfolio_plans) => {
        response.json({ environmental_portfolio_plans: environmental_portfolio_plans });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  getOne(request, response) {
    Environmental_Portfolio_Plan.findById(request.params.id)
      .then((environmental_portfolio_plan) => {
        response.json({ environmental_portfolio_plan: environmental_portfolio_plan });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  create(request, response) {
    Environmental_Portfolio_Plan.create(request.body)
      .then((newEnvironmental_Portfolio_Plan) => {
        response.json({ environmental_portfolio_plan: newEnvironmental_Portfolio_Plan });
      })
      .catch((errors) => {
        response.json({ errors: flattenErrorsToArr(errors) });
      });
  },

  delete(request, response) {
    Environmental_Portfolio_Plan.findByIdAndDelete(request.params.id)
      .then((deletedEnvironmental_Portfolio_Plan) => {
        response.json({ environmental_portfolio_plan: deletedEnvironmental_Portfolio_Plan });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  update(request, response) {
    Environmental_Portfolio_Plan.findByIdAndUpdate(
      request.params.id,
      request.body,
      {
        new: true, // to return updated doc
        runValidators: true
      }
    )
      .then((updatedEnvironmental_Portfolio_Plan) => {
        response.json({ environmental_portfolio_plan: updatedEnvironmental_Portfolio_Plan });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  }
}