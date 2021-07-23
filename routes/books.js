const express = require('express');
const router = express.Router();

const Book = require('../modulejs/book');

router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.send(books);
    } catch {
        res.send('ERROR');
    }
})

router.get('/:id', async (req, res) => {
    try {
        const books = await Book.findById(req.params.id);
        res.send(books);
    } catch {
        res.send('ERROR');
    }
})

router.post('/', async (req, res) => {
    const book = new Book({
        name: req.body.name,
        number: req.body.number
    });
    try {
        const b = await book.save();
        res.send(book);
    }
    catch {
        res.send('ERROR');
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const books = await Book.findById(req.params.id);
        books.name=req.body.name;
        books.number= req.body.number;
        const b2= await books.save();
        res.send(books);
    } catch {
        res.send('ERROR');
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const books = await Book.findByIdAndDelete(req.params.id);
        
        res.send('done deletion');
    } catch {
        res.send('ERROR');
    }
})

module.exports = router;