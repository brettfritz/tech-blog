const { User } = require('../models');

const userData = [
  {
    username: 'john_doe',
    password: 'password123'
  },
  {
    username: 'jane_smith',
    password: 'password456'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
