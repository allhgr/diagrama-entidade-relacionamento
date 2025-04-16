import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItensVendaService } from './itens-venda.service';
import { CreateItensVendaDto } from './dto/create-itens-venda.dto';
import { UpdateItensVendaDto } from './dto/update-itens-venda.dto';

@Controller('itens-venda')
export class ItensVendaController {
  constructor(private readonly itensVendaService: ItensVendaService) {}

  @Post()
  create(@Body() createItensVendaDto: CreateItensVendaDto) {
    return this.itensVendaService.create(createItensVendaDto);
  }

  @Get()
  findAll() {
    return this.itensVendaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itensVendaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItensVendaDto: UpdateItensVendaDto) {
    return this.itensVendaService.update(+id, updateItensVendaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itensVendaService.remove(+id);
  }
}
