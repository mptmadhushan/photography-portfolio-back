const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
path = require("path");

const app = express();
global.__basedir = __dirname;

const db = require("./app/models");
const Role = db.role;
app.use(express.static(path.join(__dirname, "/uploads")));
db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
  // initial();
});
function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "moderator",
  });

  Role.create({
    id: 3,
    name: "admin",
  });
}


app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to photography application. **" });
});
require("./app/routes/photos.routes")(app);
require("./app/routes/packages.routes")(app);
require("./app/routes/auth.routes")(app);
require("./app/routes/contact.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
