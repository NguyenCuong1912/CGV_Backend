const express = require('express');
const { connectDB } = require('./config/config');
const { rootRouter } = require('./routers');
const bodyParser = require('body-parser')
const app = express();
const port = "8080"
app.use(express.json())

app.use('/api/v1', rootRouter)
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send("Hello")
})

app.listen(port, async () => {
    try {
        await connectDB();
        console.log(`http://localhost:${port}`)
    } catch (error) {
        console.log(error)
    }
})