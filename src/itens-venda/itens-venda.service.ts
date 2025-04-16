import { Injectable } from '@nestjs/common';
import { CreateItensVendaDto } from './dto/create-itens-venda.dto';
import { UpdateItensVendaDto } from './dto/update-itens-venda.dto';

@Injectable()
export class ItensVendaService {
  create(createItensVendaDto: CreateItensVendaDto) {
    return 'This action adds a new itensVenda';
  }

  findAll() {
    return `This action returns all itensVenda`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itensVenda`;
  }

  update(id: number, updateItensVendaDto: UpdateItensVendaDto) {
    return `This action updates a #${id} itensVenda`;
  }

  remove(id: number) {
    return `This action removes a #${id} itensVenda`;
  }
}
