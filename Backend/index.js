const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
const port = process.env.PORT || 4000
const URI = process.env.dbURI
const books = require('./Routes/api/books.js')

//connect to monoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Successfully connected to MongoDB"))
.catch(error => console.error("Error connecting to MongoDB: ", error));

app.use(cors())

app.get('/', (req, res) => {
  res.send('Aditya')
})

app.use("/api/books", books)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})