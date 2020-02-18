const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hi there')
})

const port = 8090

app.listen(port, () => {
    console.log('Listening on port:', port)
})