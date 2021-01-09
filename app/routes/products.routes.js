module.exports = (app) => {
  const products = require("../controllers/products.controller");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", products.createPackage);

  router.post("/subProducts", products.createSubPackage);

  // Retrieve all products
  router.get("/getAll", products.findAll);
  router.get("/findAllProductNames", products.findAllPackageNames);

  router.get("/findProductById/:id", products.findProductById);

  // Retrieve all published products

  // router.get("/getAll/:cat", products.findAllByCategory);

  // // Retrieve a single Tutorial with id
  // router.get("/:id", products.findOne);

  // // Update a Tutorial with id
  // router.put("/:id", products.update);

  // // Delete a Tutorial with id
  router.delete("/:id", products.delete);

  // // Delete all products
  // router.delete("/", products.deleteAll);

  app.use("/api/product", router);
};
