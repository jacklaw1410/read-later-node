'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BookmarkTags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
    });

    await queryInterface.addColumn('BookmarkTags', 'bookmarkId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Bookmarks',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });

    return queryInterface.addColumn('BookmarkTags', 'tagId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Tags',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('BookmarkTags', 'tagId');

    await queryInterface.removeColumn('BookmarkTags', 'bookmarkId');

    return queryInterface.dropTable('BookmarkTags');
  },
};
