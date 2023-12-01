const express=require('express');
const router=express.Router();

const{
    getAllBooks,
    getBooksByName,
    getBooksByAuthor,
    getBooksByPublisher,
    getBooksByGenre,
    addBook,
    deleteBook,
    updateBook
}=require('../controllers/books');