module.exports = (app) => {
  const mail = require("../controllers/contact.mail");

  var router = require("express").Router();

  app.post("/contact", mail.mail);

  app.use("/api/mail", router);
};
