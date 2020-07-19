const { User } = require('../../src/app/models')
const faker = require('faker')

module.exports = {
  async createUser() {
    return await User.create({
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    })
  }
}