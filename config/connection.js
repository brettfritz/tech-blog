// config/connection.js

const Sequelize = require('sequelize');

// Initialize Sequelize with database credentials
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres', // Change this to match your database type if you're not using PostgreSQL
});

module.exports = sequelize;
