import { INTEGER } from 'sequelize';

const bookmarkTag = (sequelize, DataTypes) => {
  const BookmarkTag = sequelize.define('bookmark_tag', {
    bookmarkId: {
      type: INTEGER,
      allowNull: false,
    },
    tagId: {
      type: INTEGER,
      allowNull: false,
    },
  });

  return BookmarkTag;
};

export default bookmarkTag;
