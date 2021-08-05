const express = require("express");
const Book = require("../models").Book;
const User = require("../models").User;

const router = new express.Router(); 

router.post('/book/insertBook', async (req, res) => {
    try {
        let {name, author, status, pages} = req.body;
        let user = await User.findOne({where: {id: req.body.userId}});
        let book = await user.createBook({name, author, status, pages});
        res.status(200).send({result: "success", body: book});
    } catch (error) {
        res.status(400).send({result: "failed", error: error.message});
    }
});

router.get('/book/fetchBooks', async (req, res) => {
    try {
        let userBooks = await User.findOne({where: {id: parseInt(req.query.id)}, include: [Book]});
        res.status(200).send({result: "success", body: userBooks.Books});
    } catch (error) {
        res.status(400).send({result: "failed", error: error.message});
    }
});

router.patch('/book/updateBook', async (req, res) => {

});

router.delete('/book/removeBook', async (req, res) => {

});

module.exports = router;