// var indexRouter = require('./routes/index');
// var userRouter = require('./routes/users');
const express = require('express');
var sequelize = require('./models').sequelize;

const { Op } = require('sequelize');
var app = express()
sequelize.sync();

const { User } = require('./models')
// User.create({
//   name: 'zero',
//   age: 24,
//   married: false,
//   comment: '자기소개1'
// });


// User.findAll({})
// .then((users) => {
//   console.log(users)
// })


User.findAll({
  attributes: ['name', 'age'],
  where: {
    married: 1,
    age: { [Op.gt]: 24},
  }
})
.then((users)=>{
  console.log(users)
})