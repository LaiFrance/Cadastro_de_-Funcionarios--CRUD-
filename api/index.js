const express = require('express')

const cors = require('cors')
const router = require('./routes/users')
const dotenv = require('dotenv')
const app = express()



const port = process.env.DB_PORT || 8800;

dotenv.config()

app.use(cors())
app.use(express.json())
app.use('/', router)

app.listen( port, () => {
    console.log(`Server running on port ${port}`)
})