import { livroSchema } from "../models/models.js";
import { books } from "../db/db.js";

export const getBooks = async (req, res) => {
    res.status(200).json(books);
}

export const getBook = async (req, res) => {
    const { id } = req.params;
    const book = books.find((book) => book.id_livro === id);
    if (!book) {
        return res.status(404).json({ message: `Book with id ${id} not found` });
    }
    res.json(book);
}

export const createBook = async (req, res) => {
    const { titulo, isbn, edicao, ano } = req.body;
    const { error } = livroSchema.validate({ titulo, isbn, edicao, ano });
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    const id = books.length + 1;
    const book = { id, titulo, isbn, edicao, ano };
    books.push(book);
    res.status(201).json(book);
}

export const editBook = async (req, res) => {
    const { id } = req.params;
    const { titulo, isbn, edicao, ano } = req.body;
    const book = books.find((book) => book.id_livro === id);
    if (!book) {
        return res.status(404).json({ message: `Book with id ${id} not found` });
    }
    const { error } = livroSchema.validate({ titulo, isbn, edicao, ano });
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    for(let atributo in req.body){
        book[atributo] = req.body[atributo];
    }
    res.status(200).json(book);
}

export const deleteBook = async (req, res) => {
    const { id } = req.params;
    const book = books.find((book) => book.id_livro === id);
    if (!book) {
        return res.status(404).json({ message: `Book with id ${id} not found` });
    }
    books = books.filter((book) => book.id_livro !== id);
    res.status(200).json(book);
}