import joi from 'joi';

export const usuarioSchema = joi.object({
    id_user: joi.number(),
    nome: joi.string().required(),
    cpf: joi.string().min(11).required(),
    email: joi.string().email().required(),
    senha: joi.string().required(),
});

export const livroSchema = joi.object({
    id_livro: joi.number(),
    titulo: joi.string().required(),
    isbn: joi.string().min(13).required(),
    edicao: joi.number().required(),
    ano: joi.number().required(),
});

export const locacaoSchema = joi.object({
    id_user: joi.number().required(),
    id_livro: joi.number().required(),
    status: joi.string().required(),
});
