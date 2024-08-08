import { locacaoSchema } from '../models/models.js';
import { rents } from '../db/db.js';

export const getRents = async (req, res) => {
    res.status(200).json(rents);
}

export const createRent = async (req, res) => {
    const { id_user, id_livro, status } = req.body;
    const { error } = locacaoSchema.validate({ id_user, id_livro, status });
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    const id = rents.length + 1;
    const rent = { id, id_user, id_livro, status };
    rents.push(rent);
    res.status(201).json(rent);
}