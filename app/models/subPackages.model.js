module.exports = (sequelize, DataTypes) => {
  const SubPackages = sequelize.define("sub_package", {
    name: {
      type: DataTypes.STRING,
    },
    id_p: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      unique: true,
      primaryKey: true,
    },
    price: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  });

  return SubPackages;
};
