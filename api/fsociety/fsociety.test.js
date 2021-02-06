const db = require('../../data/dbConfig')
const Hacker = require('./fsociety-model')
const Elliot = {name: 'Elliot'}

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

describe('sanity check', () => {
    it('is the correct environment', () => {
        expect(process.env.DB_ENV)
            .toBe('testing')
    })
})

describe('Fsociety model', () => {
    describe('create a hacker', () => {
        it('adds a hacker to the db', async () => {
            let all
            await Hacker.insert(Elliot)
            all = await db('hackers')
            expect(all).toHaveLength(1)
        })
    })
    describe('delete a hacker', () => {
        it('deletes a hacker from the db', async () => {
            const [id] = await db('hackers').insert(Elliot)
            await Hacker.remove(id, {name: 'Elliot'})
            let all = await db('hackers')
            expect(all).toHaveLength(0)
        })
    })
})