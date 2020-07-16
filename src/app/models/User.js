const bcrypt = require('bcryptjs')

module.exports = (sequelize, dataTypes) => {
  const User = sequelize.define('User', {
    name: dataTypes.STRING,
    email: dataTypes.STRING,
    password_hash: dataTypes.STRING,
    password: dataTypes.VIRTUAL,
  }, {
    timestamps: false,
    hooks: {
      beforeSave: async user => {
        if (user.password) {
          user.password_hash = await bcrypt.hash(user.password, 8)
        }
      }
    }
  })

  return User
}