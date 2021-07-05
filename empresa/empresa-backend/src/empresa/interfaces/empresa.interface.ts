import { Document } from 'mongoose';

export interface Empresa extends Document {
    readonly nome: string;
    readonly telefone: string;
    readonly estaAtiva: string;
}