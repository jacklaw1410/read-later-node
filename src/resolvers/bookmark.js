export default {
  Query: {
    bookmarks: async (parent, args, { models }) => {
      const bookmarks = await models.Bookmark.findAll({
        order: [['added', 'DESC']],
      });

      return bookmarks;
    },
    bookmark: async (parent, { id }, { models }) => {
      return await models.Bookmark.findById(id);
    },
  },

  Bookmark: {
    tags: async (parent, args, { models }) => {
      const tags = await models.Tag.findAll({
        includes: [
          {
            model: models.Bookmark,
          },
        ],
      });

      return tags;
    },
  },
};
