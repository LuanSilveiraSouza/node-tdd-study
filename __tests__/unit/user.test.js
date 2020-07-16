const bcrypt = require('bcryptjs')

const { User } = require('../../src/app/models')
const truncate = require('../utils/truncate')

describe('User tests', () => {
  beforeEach(async () => {
    await truncate()
  })

  it('should encrypt user password', async () => {
    const user = await User.create({
      name: 'Luan Souza',
      email: 'luan@gmail.com',
      password: 'abcde12345'
    })

    const compareHash = await bcrypt.compare('abcde12345', user.password_hash)

    expect(compareHash).toBe(true)
  })
})