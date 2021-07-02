import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { CreateEmpresaDTO } from './dto/create-empresa.dto';

@Controller('empresa')
export class EmpresaController {
    constructor(private empresaService: EmpresaService) { }


    @Post('/adicionar')
    async addEmpresa(@Res() res, @Body() createEmpresaDTO: CreateEmpresaDTO) {
        const empresa = await this.empresaService.addEmpresa(createEmpresaDTO);
        return res.status(HttpStatus.OK).json({
            message: "Empresa adicionada com sucesso!!!",
            empresa
        })
    }

    @Get('empresas')
    async getAllEmpresas(@Res() res) {
        const empresas = await this.empresaService.getAllEmpresas();
        return res.status(HttpStatus.OK).json(empresas);
    }


    @Get('empresa/:empresaID')
    async getEmpresa(@Res() res, @Param('empresaID') empresaID) {
        const empresa = await this.empresaService.getEmpresa(empresaID);
        if (!empresa) throw new NotFoundException('Empresa não existe!');
        return res.status(HttpStatus.OK).json(empresa);
    }

    @Put('/editar')
    async updateEmpresa(@Res() res, @Query('empresaID') empresaID, @Body() createEmpresaDTO: CreateEmpresaDTO) {
        const empresa = await this.empresaService.updateEmpresa(empresaID, createEmpresaDTO);
        if (!empresa) throw new NotFoundException('Empresa não existe!');
        return res.status(HttpStatus.OK).json({
            message: 'Empresa atualizada com sucesso!',
            empresa
        });
    }

        @Delete('/deletar')
        async deleteEmpresa(@Res() res, @Query('empresaID') empresaID) {
            const empresa = await this.empresaService.deleteEmpresa(empresaID);
            if (!empresa) throw new NotFoundException('Empresa não existe!');
            return res.status(HttpStatus.OK).json({
                message: 'Empresa foi deletada com sucesso!',
                empresa
            })
        }
    }
