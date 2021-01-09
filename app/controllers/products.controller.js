const db = require("../models");
const Product = db.products;
const ProductImages = db.product_images;
const uploadFile = require("../middleware/upload");

exports.createPackage = async (req, res) => {
  const product = {
    title: req.body.title,
    description: req.body.description,
  };

  // Save Tutorial in the database
  Product.create(product)
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
  ProductImages.create({
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
exports.createSubPackage = async (req, res) => {
  await uploadFile(req, res);

  if (req.file == undefined) {
    return res.status(400).send({ message: "Please upload a file!" });
  }
  const package = {
    image: req.file.originalname,
    description: req.body.description,
    productId: req.body.productId,
  };

  // Save Tutorial in the database
  ProductImages.create(package)
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
  return Product.findAll({
    include: ["product_images"],
  }).then((package) => {
    console.log(">> All products", JSON.stringify(package, null, 2));
    res.send(package);
    // console.log(package);
    // return package;
  });
};
exports.findAllPackageNames = (req, res) => {
  return Product.findAll({
    attributes: ["title", "id"],
  }).then((package) => {
    console.log(">> All tutorials", JSON.stringify(package, null, 2));
    res.send(package);
    // console.log(package);
    // return package;
  });
};
exports.findProductById = ( req,res) => {
  return Product.findByPk((id = req.params.id), {
    include: ["product_images"],
  })
    .then((tutorial) => {
      console.log(">> All tutorials", JSON.stringify(tutorial, null, 2));
      res.send(tutorial);
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
