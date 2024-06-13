const { Post } = require('../models');

const postData = [
  {
    title: 'Introduction to Tech Blogging',
    content: 'This is a sample post about tech blogging.',
    user_id: 1
  },
  {
    title: 'JavaScript Frameworks Comparison',
    content: 'A comparison of popular JavaScript frameworks.',
    user_id: 2
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
