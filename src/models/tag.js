import { DATE, STRING } from 'sequelize';

const tag = (sequelize, DataTypes) => {
  const Tag = sequelize.define('tag', {
    name: {
      type: STRING,
      allowNull: false,
    },
    added: {
      type: DATE,
      allowNull: false,
    },
  });

  return Tag;
};

export default tag;
