import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ClientesModule } from './clientes/clientes.module';
import { ProdutosModule } from './produtos/produtos.module';
import { VendasModule } from './vendas/vendas.module';
import { ItensVendaModule } from './itens-venda/itens-venda.module';
import { FornecedoresModule } from './fornecedores/fornecedores.module';
import { MateriasPrimasModule } from './materias-primas/materias-primas.module';
import { ComprasModule } from './compras/compras.module';
import { ItensCompraModule } from './itens-compra/itens-compra.module';
import { EstoqueModule } from './estoque/estoque.module';

@Module({
  imports: [UsuariosModule, ClientesModule, ProdutosModule, VendasModule, ItensVendaModule, FornecedoresModule, MateriasPrimasModule, ComprasModule, ItensCompraModule, EstoqueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
