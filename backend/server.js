require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const notes = require('./data/notes')
const { notFound, errorHandler } = require('./middlewares/errorMiddleware')

const userRoutes = require('./routes/userRoutes')
const noteRoutes = require('./routes/noteRoutes')

const app = express()
connectDB()

app.use(express.json())

app.get('/api/notes', (req, res) => {
    res.json(notes)
})

app.use('/api/users', userRoutes)
app.use('/api/notes', noteRoutes)

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`🚀 Server is listening at port ${port} `);
})