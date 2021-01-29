const db = require('../../data/dbConfig')
const Hacker = require('./fsociety-model')
const Elliot = {name: 'Elliot'}

it('is the correct environment', () => {
    expect(process.env.DB_ENV)
        .toBe('testing')
})