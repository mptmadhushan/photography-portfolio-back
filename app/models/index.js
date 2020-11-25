const dbConfig = require("../../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  // operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.photos = require("./photos.model")(sequelize, Sequelize);
db.packages = require("./packages.model")(sequelize, Sequelize);
db.subPackages = require("./subPackages.model")(sequelize, Sequelize);

db.packages.hasMany(db.subPackages, { as: "sub_packages" });
db.subPackages.belongsTo(db.packages, {
  foreignKey: "packageId",
  as: "package",
});
module.exports = db;
