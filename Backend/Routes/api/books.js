const express = require('express')
const Book = require('../../model/book.js')
const router = express.Router()

router.get("/",(req,res) => {
    Book.find()
    .then((books) => {
        // console.log(books);
        res.json(books);
    })
    .catch((error) => res.status(404).json("Error: ", error))
})

module.exports = router





