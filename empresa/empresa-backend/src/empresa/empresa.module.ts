import { Module } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { EmpresaController } from './empresa.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EmpresaSchema } from './schemas/empresa.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Empresa', schema: EmpresaSchema }])
  ],
  providers: [EmpresaService],
  controllers: [EmpresaController]
})
export class EmpresaModule {}
