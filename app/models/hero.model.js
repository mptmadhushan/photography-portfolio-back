module.exports = (sequelize, Sequelize) => {
  const Hero = sequelize.define("heros", {
    image: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
    },
  });

  return Hero;
};
