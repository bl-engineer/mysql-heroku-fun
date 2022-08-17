const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.JAWSDB_URL || process.env.MYSQL_URI)

module.exports = sequelize;
