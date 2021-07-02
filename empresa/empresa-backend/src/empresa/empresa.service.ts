import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Empresa } from './interfaces/empresa.interface';
import { CreateEmpresaDTO } from './dto/create-empresa.dto';

@Injectable()
export class EmpresaService {
    constructor(@InjectModel('Empresa') private readonly modeloEmpresa: Model<Empresa>) { }

    async getAllEmpresas(): Promise<Empresa[]> {
        const empresas = await this.modeloEmpresa.find().exec();
        return empresas;
    }

    async getEmpresa(empresaID): Promise<Empresa> {
        const empresa = await this.modeloEmpresa.findById(empresaID).exec();
        return empresa;
    }

    async addEmpresa(createEmpresaDTO: CreateEmpresaDTO): Promise<Empresa> {
        const novaEmpresa = await new this.modeloEmpresa(createEmpresaDTO);
        return novaEmpresa.save();
    }

    async updateEmpresa(empresaID, createEmpresaDTO: CreateEmpresaDTO): Promise<Empresa> {
        const updatedEmpresa = await this.modeloEmpresa
            .findByIdAndUpdate(empresaID, createEmpresaDTO, { new: true });
        return updatedEmpresa;
    }

    async deleteEmpresa(empresaID): Promise<any> {
        const deletedEmpresa= await this.modeloEmpresa.findByIdAndDelete(empresaID);
        return deletedEmpresa;
    }
}