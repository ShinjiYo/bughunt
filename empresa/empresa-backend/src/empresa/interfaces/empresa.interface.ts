import { Document } from 'mongoose';

export interface Empresa extends Document {
    readonly first_name: string;
    readonly last_name: string;
    readonly estaAtiva: string;
}