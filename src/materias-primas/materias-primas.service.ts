import { Injectable } from '@nestjs/common';
import { CreateMateriasPrimaDto } from './dto/create-materias-prima.dto';
import { UpdateMateriasPrimaDto } from './dto/update-materias-prima.dto';

@Injectable()
export class MateriasPrimasService {
  create(createMateriasPrimaDto: CreateMateriasPrimaDto) {
    return 'This action adds a new materiasPrima';
  }

  findAll() {
    return `This action returns all materiasPrimas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} materiasPrima`;
  }

  update(id: number, updateMateriasPrimaDto: UpdateMateriasPrimaDto) {
    return `This action updates a #${id} materiasPrima`;
  }

  remove(id: number) {
    return `This action removes a #${id} materiasPrima`;
  }
}
