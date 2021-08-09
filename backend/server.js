require('dotenv').config()
const express = require('express')
const notes = require('./data/notes')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.json(notes)
})

app.get('/:id', (req, res) => {
    const note = notes.find((n) => n._id === req.params.id)
    res.json(note)
})

const port = process.env.PORT || 5000
app.listen(process.env.PORT, () => {
    console.log(`🚀 Server is listening at port ${port} `);
})