require('dotenv').config()
const express = require('express')
const app = express()
const connectToMongo = require('./db/db')
const port = process.env.PROT || 3000



// middleware set Router
app.use('/api/products',require('./routes/products'))

app.listen(port, () => {
  connectToMongo()
  console.log(`Example app listening on port ${port}`)
})