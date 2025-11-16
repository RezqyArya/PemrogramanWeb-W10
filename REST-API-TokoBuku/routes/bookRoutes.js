const express = require('express');
const { v4: uuid } = require('uuid');
const validateBook = require('../middleware/validateBook');

const router = express.Router();

let books = [
    { id: '1', title: 'Code: The Hidden Language of Computer. Hardware and Software.', author: 'Charles Petzold' },
    { id: '2', title: 'Pragmatic Programmer', author: 'Andrew Hunt' }
];

router.get('/', (req, res) => {
    res.json(books);
});

router.post('/', validateBook, (req, res) => {
    const { title, author, year, cover } = req.body;
    const newBook = {
        id: uuid(),
        title,
        author,
        year,
        cover
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

router.get('/:id', (req, res) => {
    const book = books.find(b => b.id === req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json(book);
});

router.put('/:id', (req, res) => {
    const idx = books.findIndex(b => b.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: "Book not found" });

    books[idx] = {
        ...books[idx],
        ...req.body
    };

    res.json(books[idx]);
});

router.delete('/:id', (req, res) => {
    const idx = books.findIndex(b => b.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: "Book not found" });

    const deleted = books.splice(idx, 1);
    res.json({ deleted });
});

module.exports = router;