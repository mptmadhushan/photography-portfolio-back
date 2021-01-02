module.exports = (app) => {
  const heros = require("../controllers/hero.controller");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", heros.addNew);

  // router.post("/subPackage", packages.createSubPackage);

  router.get("/getAll", heros.findAll);
  // router.get("/findAllPackageNames", packages.findAllPackageNames);

  // router.delete("/:id", packages.delete);

  app.use("/api/hero", router);
};
