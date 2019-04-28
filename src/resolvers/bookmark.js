export default {
  Query: {
    bookmarks: async (parent, args, { models }) => {
      const bookmarks = await models.Bookmark.findAll({
        order: [['added', 'DESC']],
      });

      return bookmarks;
    },
    bookmark: async (parent, { id }, { models }) => {
      return await models.Bookmark.findByPk(id);
    },
  },

  Bookmark: {
    tags: async (parent, args, { models }) => {
      return await parent.getTags();
    },
  },
};
