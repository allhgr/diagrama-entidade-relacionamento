import { Module } from '@nestjs/common';
import { MateriasPrimasService } from './materias-primas.service';
import { MateriasPrimasController } from './materias-primas.controller';

@Module({
  controllers: [MateriasPrimasController],
  providers: [MateriasPrimasService],
})
export class MateriasPrimasModule {}
