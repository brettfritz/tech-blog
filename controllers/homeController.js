
const { Post, User } = require('../models');

const homeController = {
  renderHomePage: async (req, res) => {
    try {
      // Fetch all posts with associated user information
      const posts = await Post.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
        order: [['createdAt', 'DESC']],
      });

      // Render the home page view with the retrieved posts
      res.render('home', { 
        title: 'Tech Blog | Home',
        logged_in: req.session.logged_in,
        posts 
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = homeController;
