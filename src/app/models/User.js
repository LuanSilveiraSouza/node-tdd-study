module.exports = (sequelize, dataTypes) => {
  const User = sequelize.define('User', {
    name: dataTypes.STRING,
    email: dataTypes.STRING,
    password_hash: dataTypes.STRING
  }, {
    timestamps: false
  })

  return User
}