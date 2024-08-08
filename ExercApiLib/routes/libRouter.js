import { Router } from 'express';
import { getUsers, createUser, editUser, deleteUser } from '../controllers/userController.js';
import { getBooks, getBook, createBook, editBook, deleteBook } from '../controllers/bookController.js';
import { getRents, createRent } from '../controllers/rentController.js';

const router = Router();

// Users
router.get('/bib/users', getUsers);
router.post('/bib/user', createUser);
router.put('/bib/user/:id', editUser);
router.delete('/bib/user', deleteUser);

// Books
router.get('/bib/livros', getBooks);
router.get('/bib/livro/:id', getBook);
router.post('/bib/livro', createBook);
router.put('/bib/livro/:id', editBook);
router.delete('/bib/livro', deleteBook);

// Rents
router.get('/bib/locacoes', getRents);
router.post('/bib/locar', createRent);

export default router;
