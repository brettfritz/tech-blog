const { Comment } = require('../models');

const commentData = [
  {
    content: 'Great post!',
    user_id: 2,
    post_id: 1
  },
  {
    content: 'Interesting comparison.',
    user_id: 1,
    post_id: 2
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
