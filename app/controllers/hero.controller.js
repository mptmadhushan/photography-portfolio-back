const db = require("../models");
const Hero = db.hero;
// const uploadFile = require("../middleware/upload");
const upload = require("../middleware/uploadArray");

exports.createHero = async (req, res) => {
  await uploadFile(req, res);

  if (req.file == undefined) {
    return res.status(400).send({ message: "Please upload a file!" });
  }
  const hero = {
    image: req.file.originalname,
    title: req.body.title,
  };

  // Save Tutorial in the database
  Hero.create(hero)
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
    var a = [];
    for (var i = 0, j = req.files.imageArray.length; i < j; i++) {
      a.push(req.files.imageArray[i].filename);
    }
    const photos = {
      image: JSON.stringify(a),
      title: req.body.title,
    };

    // Save Tutorial in the database
    Hero.create(photos)
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
exports.findAll = (req, res) => {
  return Hero.findAll({}).then((hero) => {
    res.send(hero);
    // console.log(package);
    // return package;
  });
};
