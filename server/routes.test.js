const request = require('supertest')

const server = require('./server')

describe('API routes', () => {
  it('GET /api/v1/words gets a response', () => {
    return request(server)
      .get('/api/v1/words')
      .expect(200)
      .then((res) => {
        console.log('res', res.body)
        expect(res.body.word).toBeTruthy()
        return null
      })
  })
})
