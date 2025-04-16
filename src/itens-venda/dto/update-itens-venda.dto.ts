import { PartialType } from '@nestjs/swagger';
import { CreateItensVendaDto } from './create-itens-venda.dto';

export class UpdateItensVendaDto extends PartialType(CreateItensVendaDto) {}
