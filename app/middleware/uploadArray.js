const util = require("util");
const path = require("path");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/uploads/");
  },
  filename: (req, file, callback) => {
    const match = ["image/png", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      var message = `${file.originalname} is invalid. Only accept png/jpeg.`;
      return callback(message, null);
    }

    var filename = `${Date.now()}-bezkoder-${file.originalname}`;
    callback(null, filename);
  },
});

var uploadFiles = multer({ storage: storage }).fields([
  {
    name: "main",
    maxCount: 1,
  },
  {
    name: "imageArray",
    maxCount: 150,
  },
  {
    name: "Nutritional",
    maxCount: 1,
  },
]);
var uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;
