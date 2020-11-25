module.exports = (app) => {
  const packages = require("../controllers/packages.controller");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", packages.createPackage);
  router.post("/subPackage", packages.createSubPackage);

  // Retrieve all packages
  router.get("/getAll", packages.findAll);

  // router.get("/Category/getAll", packages.findAllCategory);

  // Retrieve all published packages
  // router.get("/getAll/:cat", packages.findAllByCategory);

  // // Retrieve a single Tutorial with id
  // router.get("/:id", packages.findOne);

  // // Update a Tutorial with id
  // router.put("/:id", packages.update);

  // // Delete a Tutorial with id
  // router.delete("/:id", packages.delete);

  // // Delete all packages
  // router.delete("/", packages.deleteAll);

  app.use("/api/packages", router);
};
