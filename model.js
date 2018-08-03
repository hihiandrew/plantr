const Sequelize = require('sequelize');
const conn = new Sequelize('postgres://localhost:5432/plantr');

const Gardener = conn.define('Gardener', {
  name: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.INTEGER,
  },
});

const Plot = conn.define('Gardener', {
  size: {
    type: Sequelize.INTEGER,
  },
  shaded: {
    type: Sequelize.BOOLEAN,
  },
});

const Vegetable = conn.define('Vegetable', {
  name: {
    type: Sequelize.STRING,
  },
  color: {
    type: Sequelize.STRING,
  },
  planted_on: {
    type: Sequelize.DATE,
  },
});

Plot.belongsTo(Gardener);
Gardener.belongsTo(Plot);

Plot.belongsToMany(Vegetable, { through: 'vegPlot' });
Vegetable.belongsToMany(Plot, { through: 'vegPlot' });

Gardener.belongsTo(Vegetable, { as: 'favVeg' });

module.exports = {
  conn,
  Gardener,
  Vegetable,
  Plot,
};
