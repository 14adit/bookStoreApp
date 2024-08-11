const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
const port = process.env.PORT || 4000
const URI = process.env.dbURI
const books = require('./Routes/api/books.js')
const users = require('./Routes/api/users.js')
const session = require('express-session')

//connect to monoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Successfully connected to MongoDB"))
.catch(error => console.error("Error connecting to MongoDB: ", error));

//Middleware to parse incoming request bodies
app.use(express.json());

app.use(cors())

// app.use(session)

app.get('/', (req, res) => {
  res.send('Aditya')
})

app.use("/api/books", books)
app.use("/api/users", users)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})