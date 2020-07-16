const routes = require('express').Router()
const { User } = require('./app/models/index')

User.create({
  name: 'Luan Souza',
  email: 'luantest@gmail.com',
  password_hash: '0192837465'
})

module.exports = routes
