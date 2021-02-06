const request = require('supertest')
const db = require('../data/dbConfig')
const Hacker = require('./fsociety/fsociety-model')
const server = require('./server')

const elliot = { name: 'elliot' }

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})
 
beforeEach(async () => {
    await db('hackers').truncate()
})
 
afterAll(async () => {
    await db.destroy()
})

describe('server', () => {
    describe('GET /hackers', () => {
        it('responds with 200 ok', async () => {
            const res = await request(server).get('/hackers')
            expect(res.status).toBe(200)
        })
    })
    describe('Post /hackers', () => {
        it('responds with new hacker', async () => {
            let res = await request(server).post('/hackers').send(elliot)
            expect(res.body).toMatchObject({id: 1})
        })
    })
    describe('DELETE hacker', () => {
        it('deletes hacker', async () => {
            const [id] = await db('hackers').insert(elliot)
            await Hacker.remove(id)
            let all = await db('hackers')
            expect(all).toHaveLength(0)
        })
    })
})