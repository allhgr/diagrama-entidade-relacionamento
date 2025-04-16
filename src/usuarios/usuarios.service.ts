import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.usuarios.findMany();
  }

  findOne(id: number) {
    return this.prisma.usuarios.findUnique({ where: { id } });
  }

  create(data: Prisma.UsuariosCreateInput) {
    return this.prisma.usuarios.create({ data });
  }

  update(id: number, data: Prisma.UsuariosUpdateInput) {
    return this.prisma.usuarios.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.usuarios.delete({ where: { id } });
  }
}
