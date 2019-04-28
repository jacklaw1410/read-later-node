import Sequelize from 'sequelize';

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  pool: {
    min: 2,
    max: 10,
  },
});

const models = {
  // User: sequelize.import('./user'),
  Bookmark: sequelize.import('./bookmark'),
  Tag: sequelize.import('./tag'),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export default models;
