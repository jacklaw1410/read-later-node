import { DATE, STRING } from 'sequelize';

const bookmark = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define('bookmark', {
    title: {
      type: STRING,
      allowNull: false,
    },
    url: {
      type: STRING,
      allowNull: false,
    },
    added: {
      type: DATE,
      allowNull: false,
    },
    finished: {
      type: DATE,
      allowNull: false,
    },
  });

  Bookmark.associate = models => {
    Bookmark.hasMany(models.Tag);
  };

  return Bookmark;
};

export default bookmark;