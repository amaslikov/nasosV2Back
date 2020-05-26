const categoryProducts = require("./api/category_products");

class Router {
  constructor(app) {
    this.app = app;
    this.init();
  }

  init() {
    this.app.use("/api/category-products", categoryProducts);
  }
}

module.exports = Router;
