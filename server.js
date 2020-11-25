const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
path = require("path");

const app = express();
global.__basedir = __dirname;

const db = require("./app/models");
app.use(express.static(path.join(__dirname, "/uploads")));
db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
});
var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to photography application." });
});
require("./app/routes/photos.routes")(app);
require("./app/routes/packages.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
