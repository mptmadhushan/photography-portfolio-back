module.exports = (sequelize, Sequelize) => {
  const Photos = sequelize.define("photos", {
    category: {
      type: Sequelize.STRING,
    },
    image: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
    },
  });

  return Photos;
};
