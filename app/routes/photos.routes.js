module.exports = (app) => {
  const photos = require("../controllers/photos.controller");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", photos.addNew);

  router.post("/addNewCategory", photos.addNewCategory);

  // Retrieve all photos
  router.get("/getAll/getAll", photos.findAll);

  router.get("/getAll/findAllRandom", photos.findAllRandom);

  router.get("/Category/getAll", photos.findAllCategory);

  router.get("/Album/getAll/:cat", photos.findAllAlbum);

  // Retrieve all published photos
  router.get("/getAll/:cat", photos.findAllByCategory);

  // Retrieve a single Tutorial with id
  router.get("/:id", photos.findOne);

  // Update a Tutorial with id
  router.put("/:id", photos.update);

  // Delete a Tutorial with id
  router.delete("/:id", photos.delete);

  // Delete all photos


  app.use("/api/photos", router);
};
