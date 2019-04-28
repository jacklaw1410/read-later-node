'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bookmark_tags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
    });

    await queryInterface.addColumn('bookmark_tags', 'bookmarkId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'bookmarks',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });

    return queryInterface.addColumn('bookmark_tags', 'tagId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'tags',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('bookmark_tags', 'tagId');

    await queryInterface.removeColumn('bookmark_tags', 'bookmarkId');

    return queryInterface.dropTable('bookmark_tags');
  },
};
