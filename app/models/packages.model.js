module.exports = (sequelize, DataTypes) => {
  const Package = sequelize.define("package", {
    title: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
  });

  return Package;
};
