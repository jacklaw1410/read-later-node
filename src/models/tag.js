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

  Tag.associate = models => {
    Tag.belongsToMany(models.Bookmark, {
      through: {
        model: models.BookmarkTag,
        unique: false,
      },
      foreignKey: 'tagId',
      constraints: true,
    });
  };

  return Tag;
};

export default tag;
