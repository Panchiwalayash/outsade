const connectToMongo=require("./db")
const express = require('express')
const cors=require('cors')
connectToMongo();

const app = express()
const port = 5000


app.use(express.json()) 

app.use(cors())
// app.use('/api/auth',require('./routes/user'))

app.use('/api/category',require('./routes/category'))
app.use('/api/product',require('./routes/product'))


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})