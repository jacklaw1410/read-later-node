export default {
  Query: {
    tags: async (parent, args, { models }) => {
      const tags = await models.Tag.findAll({
        order: [['added', 'DESC']],
      });

      return tags;
    },
    tag: async (parent, { id }, { models }) => {
      return await models.Tag.findByPk(id);
    },
  },

  Tag: {
    bookmarks: async (parent, args, { models }) => {
      return await parent.getBookmarks();
    },
  },
};
