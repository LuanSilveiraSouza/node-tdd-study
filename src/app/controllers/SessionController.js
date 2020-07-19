const { User } = require('../models')
const { json } = require('sequelize')

class SessionController {
  async store(req, res) {
    const { email, password } = req.body 

    const user = await User.findOne({ where: { email } })

    if (!user) {
      return res.status(401).json({ msg: 'User not found' })
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ msg: 'Incorret Password' })
    }

    return res.status(200).json({ user, token: user.generateToken() })
  }
}

module.exports = new SessionController()