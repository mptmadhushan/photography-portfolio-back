module.exports = (app) => {
  const photos = require("../controllers/photos.controller");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", photos.addNew);

  // Retrieve all photos
  router.get("/", photos.findAll);

  // Retrieve all published photos
  router.get("/byCategory/:cat", photos.findAllByCategory);

  // Retrieve a single Tutorial with id
  router.get("/:id", photos.findOne);

  // Update a Tutorial with id
  router.put("/:id", photos.update);

  // Delete a Tutorial with id
  router.delete("/:id", photos.delete);

  // Delete all photos
  router.delete("/", photos.deleteAll);

  app.use("/api/photos", router);
};
