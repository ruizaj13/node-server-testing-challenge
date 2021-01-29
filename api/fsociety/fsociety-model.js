const db = require('../../data/dbConfig')

module.exports = {insert, getAll, remove}

function getAll() {
    return db('hackers')
}

async function insert(hacker) {
    const [id] = await db('hackers')
        .insert(hacker)
    return await db('hackers')
        .where({id})
        .first()
}

function remove(id) {
    return db('hackers').where({id}).del()
}
