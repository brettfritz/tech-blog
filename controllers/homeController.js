// controllers/homeController.js

const { Post, User, Comment } = require('../models');

const homeController = {
  renderHomePage: async (req, res) => {
    try {
      const posts = await Post.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
        order: [['createdAt', 'DESC']],
      });

      res.render('home', { posts });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  renderPostDetailPage: async (req, res) => {
    try {
      const { id } = req.params;

      const post = await Post.findByPk(id, {
        include: [
          {
            model: User,
            attributes: ['username'],
          },
          {
            model: Comment,
            include: [{ model: User, attributes: ['username'] }],
          },
        ],
      });

      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }

      res.render('postDetail', { post });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

module.exports = homeController;
