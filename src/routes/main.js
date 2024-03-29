const express = require('express');
const mainController = require('../controllers/main');

const router = express.Router();

//Middlewares
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');


// Routes
router.get('/', mainController.home);
router.get('/books/detail/:id', mainController.bookDetail);
router.get('/books/search', mainController.bookSearch);
router.post('/books/search', mainController.bookSearchResult);
router.get('/authors', mainController.authors);
router.get('/authors/:id/books', mainController.authorBooks);
router.get('/users/register', guestMiddleware, mainController.register);
router.post('/users/register', mainController.processRegister);
router.post('/users/login', guestMiddleware, mainController.login);
router.get('/logout', mainController.logout);
router.get('/users/login', mainController.processLogin);
router.delete('/books/:id', mainController.deleteBook);
router.get('/books/edit/:id', mainController.edit);
router.put('/books/edit/:id', mainController.processEdit);

module.exports = router;
