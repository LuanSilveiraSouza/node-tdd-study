const request = require('supertest')

const app = require('../../src/app')
const { User } = require('../../src/app/models')
const truncate = require('../utils/truncate')

describe('Authentication', () => {
  beforeEach(async () => {
    await truncate()
  })

  it('should authenticate with valid credentials', async () => {
    const user = await User.create({
      name: 'Luan Souza',
      email: 'luantest@gmail.com',
      password: 'abcde12345'
    })

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: user.password
      })

    expect(response.status).toBe(200)
  })

  it('should not authenticate with invalid credentials', async () =>{
    const user = await User.create({
      name: 'Luan Souza',
      email: 'luantest@gmail.com',
      password: 'abcde12345'
    })

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123456'
      })

    expect(response.status).toBe(401)
  })

  it('should return token when authenticated', async () => {
    const user = await User.create({
      name: 'Luan Souza',
      email: 'luantest@gmail.com',
      password: 'abcde12345'
    })

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: user.password
      })

    expect(response.body).toHaveProperty('token')
  })
})