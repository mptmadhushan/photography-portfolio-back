module.exports = (sequelize, DataTypes) => {
  const ProductImages = sequelize.define("product_image", {
    description: {
      type: DataTypes.STRING,
    },
    id_p: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      unique: true,
      primaryKey: true,
    },
    image: {
      type: DataTypes.STRING,
    },
  });

  return ProductImages;
};
