import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmpresaModule } from './empresa/empresa.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/bughunt', { useNewUrlParser: true }),
    EmpresaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}