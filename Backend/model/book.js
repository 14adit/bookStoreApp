const mongoose = require('mongoose')


const bookSchema = mongoose.Schema({
    name:String,
    title:String,
    price:Number,
    category:String,
    image:String
})

const Book = mongoose.model("Book",bookSchema,"Books")
module.exports = Book


