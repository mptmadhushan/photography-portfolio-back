const db = require("../models");
const Package = db.packages;
const SubPackage = db.subPackages;
const uploadFile = require("../middleware/upload");

exports.createPackage = async (req, res) => {
  await uploadFile(req, res);

  if (req.file == undefined) {
    return res.status(400).send({ message: "Please upload a file!" });
  }
  const package = {
    image: req.file.originalname,
    title: req.body.title,
  };

  // Save Tutorial in the database
  Package.create(package)
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
exports.createSubPackage = (req, res) => {
  SubPackage.create({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    packageId: req.body.packageId,
  })
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
exports.findAll = (req, res) => {
  return Package.findAll({
    include: ["sub_packages"],
  }).then((package) => {
    console.log(">> All tutorials", JSON.stringify(package, null, 2));
    res.send(package);
    // console.log(package);
    // return package;
  });
};
exports.findTutorialById = (req) => {
  return Package.findByPk((packageId = req.body.packageId), {
    include: ["sub_packages"],
  })
    .then((tutorial) => {
      return tutorial;
    })
    .catch((err) => {
      console.log(">> Error while finding tutorial: ", err);
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;
  Package.destroy({
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
