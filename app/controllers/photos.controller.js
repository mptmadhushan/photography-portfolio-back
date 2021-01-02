const db = require("../models");
const Photos = db.photos;
const upload = require("../middleware/uploadArray");
const Sequelize = require("sequelize");
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tutorial
  const photos = {
    category: req.body.category,
    image: req.file.originalname,
    title: req.body.title,
  };

  // Save Tutorial in the database
  Photos.create(photos)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

exports.addNew = async (req, res) => {
  try {
    await upload(req, res);

    if (req.body.category == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }
    var a = [];
    for (var i = 0, j = req.files.imageArray.length; i < j; i++) {
      a.push(req.files.imageArray[i].filename);
    }
    const photos = {
      category: req.body.category,
      image: JSON.stringify(a),
      title: req.body.title,
      album: req.body.album,
      mainImage: req.files.main[0].filename,
    };

    // Save Tutorial in the database
    Photos.create(photos)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial.",
        });
      });
  } catch (err) {
    res.status(500).send({
      message: `Could not upload the file: ${err}`,
    });
  }
};

exports.addNewDS = async (req, res) => {
  try {
    await upload(req, res);
    // await uploadFile(req, res);

    console.log(req.files);

    var a = [];
    for (var i = 0, j = req.files.imageArray.length; i < j; i++) {
      a.push(req.files.imageArray[i].filename);
    }
    const photos = {
      category: req.body.category,
      image: JSON.stringify(a),
      title: req.body.title,
      album: req.body.album,
      mainImage: files.main[0].filename,
    };
    console.log("asdad", a);
    Photos.create(photos)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial.",
        });
      });
  } catch (err) {
    res.status(500).send({
      message: `Could not upload the file: ${err}`,
    });
  }
};
exports.addNewCategory = async (req, res) => {
  if (req.body.category == undefined) {
    return res.status(400).send({ message: "Please upload a file!" });
  }
  const photos = {
    category: req.body.category,
  };

  // Save Tutorial in the database
  Photos.create(photos)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};
// Create and Save a new Photos exports.create = (req, res) => {};

// Retrieve all Photos  from the database.
exports.findAll = (req, res) => {
  Photos.findAll({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
exports.findAllRandom = (req, res) => {
  Photos.findAll({
    order: Sequelize.literal("rand()"),
    limit: 9,
    offset: 2,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
exports.findAllByCategory = (req, res) => {
  const cat = req.params.cat;
  Photos.findAll({ where: { album: cat } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
exports.findAllAlbum = (req, res) => {
  const cat = req.params.cat;

  Photos.findAll({
    where: { category: cat },
    // attributes: [
    //   [
    //     Sequelize.fn("DISTINCT", Sequelize.col("album", "image")),
    //     "album",
    //     "image",
    //   ],
    // ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving exam_date.",
      });
    });
};
exports.findAllCategory = (req, res) => {
  Photos.findAll({
    attributes: [
      [Sequelize.fn("DISTINCT", Sequelize.col("category")), "category"],
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving exam_date.",
      });
    });
};
// Find a single Photos with an id
exports.findOne = (req, res) => {};

// Update a Photos by the id in the request
exports.update = (req, res) => {};

// Delete a Photos with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Photos.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id,
      });
    });
};
// Delete all Photos  from the database.
exports.deleteAll = (req, res) => {};

// Find all published Photos
exports.findAllPublished = (req, res) => {};
