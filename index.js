import express from 'express'
import mongoose from 'mongoose'
import path from 'path'
import mainRouter from './routes/main.js'
const __dirname = path.resolve()

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', mainRouter)
app.use((req, res,next) => {
    res.sendFile('/index.html')
})

async function start() {
    try {
        await mongoose.connect('mongodb://localhost/testwork', {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useFindAndModify: false})

        const PORT = process.env.PORT || 3000
        app.listen(PORT, () => {})
    } catch (error) {
        console.log(error)
    }
}

start()