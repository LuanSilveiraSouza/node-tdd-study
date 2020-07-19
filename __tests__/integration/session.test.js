const request = require('supertest')

const app = require('../../src/app')
const { User } = require('../../src/app/models')
const truncate = require('../utils/truncate')
const { createUser } = require('../utils/UserFactory')

describe('Authentication', () => {
  beforeEach(async () => {
    await truncate()
  })

  it('should authenticate with valid credentials', async () => {
    const user = await createUser()

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: user.password
      })

    expect(response.status).toBe(200)
  })

  it('should not authenticate with invalid credentials', async () =>{
    const user = await createUser()

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '0'
      })

    expect(response.status).toBe(401)
  })

  it('should return token when authenticated', async () => {
    const user = await createUser()

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: user.password
      })

    expect(response.body).toHaveProperty('token')
  })

  it('should have access to private routes when authenticated', async () => {
    const user = await createUser()

    const response = await request(app)
      .get('/search')
      .set('Authorization', `Bearer ${user.generateToken()}`)

    expect(response.status).toBe(200)
  })

  it('should not have access to private routes without jwt', async () => {
    const response = await request(app)
      .get('/search')

    expect(response.status).toBe(401)
  })

  it('should not have access to private routes with invalid jwt', async () => {
    const response = await request(app)
      .get('/search')
      .set('Authorization', `Bearer 123456`)

    expect(response.status).toBe(401)
  })
})