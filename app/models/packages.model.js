module.exports = (sequelize, DataTypes) => {
  const Package = sequelize.define("package", {
    title: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  });

  return Package;
};
