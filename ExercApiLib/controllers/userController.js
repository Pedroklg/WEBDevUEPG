import { usuarioSchema } from "../models/models.js";
import { users, rents } from "../db/db.js";

export const getUsers = async (req, res) => {
    res.status(200).json(users);
};

export const createUser = async (req, res) => {
    const { nome, cpf, email, senha } = req.body;
    const { error } = usuarioSchema.validate({ nome, cpf, email, senha });
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    const id = users.length + 1;
    const user = { id, nome, cpf, email, senha };
    users.push(user);
    res.status(201).json(user);
};

export const editUser = async (req, res) => {
    const { id } = req.params;
    const { nome, cpf, email, senha } = req.body;
    const user = users.find((user) => user.id_user == id);
    if (!user) {
        return res.status(404).json({ message: `User with id ${id} not found` });
    }
    const { error } = usuarioSchema.validate({ nome, cpf, email, senha });
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    for(let atributo in req.body){
        user[atributo] = req.body[atributo];
    }
    res.status(200).json(user);
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id_user === id);
    if (!user) {
        return res.status(404).json({ message: `User with id ${id} not found` });
    }
    users = users.filter((user) => user.id_user !== id);
    rents = rents.filter((rent) => rent.id_user !== id);

    res.status(200).json(user);
};