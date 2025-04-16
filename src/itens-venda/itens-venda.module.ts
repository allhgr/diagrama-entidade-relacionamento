import { Module } from '@nestjs/common';
import { ItensVendaService } from './itens-venda.service';
import { ItensVendaController } from './itens-venda.controller';

@Module({
  controllers: [ItensVendaController],
  providers: [ItensVendaService],
})
export class ItensVendaModule {}
