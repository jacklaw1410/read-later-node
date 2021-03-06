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
      allowNull: true,
    },
  });

  Bookmark.associate = models => {
    Bookmark.belongsToMany(models.Tag, {
      through: {
        model: models.BookmarkTag,
        unique: false,
      },
      foreignKey: 'bookmarkId',
      constraints: true,
    });
  };

  return Bookmark;
};

export default bookmark;
