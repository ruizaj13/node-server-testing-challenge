const express = require('express')
const Hackers = require('./fsociety/fsociety-model')

const server = express()

server.use(express.json())

server.get('/hackers', (req, res) => {
    Hackers.getAll()
        .then(hacker => {
            res.status(200).json(hacker)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

server.post('/hackers', (req, res) => {
    Hackers.insert(req.body)
        .then(hacker => {
            res.status(200).json(hacker)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = server