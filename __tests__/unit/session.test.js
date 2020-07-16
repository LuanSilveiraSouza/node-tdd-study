const { User } = require('../../src/app/models')

describe('Register tests', () => {
  it('should create a User', async () => {
    const user = await User.create({
      name: 'Luan Souza',
      email: 'luantest@gmail.com',
      password_hash: '0192837465'
    })

    expect(user.email).toBe('luantest@gmail.com')
  })
})