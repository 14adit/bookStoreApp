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

router.delete("/:id",(req,res) => {
    Book.findByIdAndDelete(req.params.id, req.body)
    .then((books) => {
        res.json("Book deleted successfully")
    })
    .catch((error) => res.status(400).json("Error: ", error))
})

module.exports = router





