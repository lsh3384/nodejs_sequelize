const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
console.log(process.env.NODE_ENV)
console.log(__dirname+'/../config/config.js')
const config= require(__dirname + '/../config/config.js')[env]
// const config2= require(__dirname + '/../config/config.js')
const db = {};

const sequelize = new Sequelize('mysql://' + config.USER_NAME + ':' + config.PASSWORD + '@' + config.HOST + ':' + config.PORT + '/' + config.DATABASE);

db.sequelize = sequelize;
db.Sequelize = Sequelize;


db.User = require('./user')(sequelize, Sequelize)
db.Comment = require('./comment')(sequelize, Sequelize)

db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id' })
db.Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id' })

module.exports = db;