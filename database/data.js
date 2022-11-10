const Sequelize = require('sequelize');

const connection = new Sequelize('despesa_db','root','Nicolas#1020',{
    host: 'localhost',
    dialect:'mysql',
    port: 3306
});

module.exports = connection;