import * as mongoose from 'mongoose';

export const EmpresaSchema = new mongoose.Schema({
    nome: String,
    telefone: String,
    estaAtiva: String
})