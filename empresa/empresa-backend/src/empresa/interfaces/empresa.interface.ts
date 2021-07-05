import { Document } from 'mongoose';

export interface Empresa extends Document {
    readonly first_name: string;
    readonly telefone: string;
    readonly estaAtiva: string;
}