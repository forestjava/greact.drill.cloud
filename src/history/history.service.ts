import { Injectable } from '@nestjs/common';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class HistoryService {
  constructor(private prisma: PrismaService) { }

  async create(createHistoryDto: CreateHistoryDto) {
    return this.prisma.history.create({
      data: createHistoryDto,
    });
  }

  async findAll() {
    return this.prisma.history.findMany({
      orderBy: { timestamp: 'desc' },
    });
  }

  async findOne(id: number) {
    return this.prisma.history.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateHistoryDto: UpdateHistoryDto) {
    return this.prisma.history.update({
      where: { id },
      data: updateHistoryDto,
    });
  }

  async remove(id: number) {
    return this.prisma.history.delete({
      where: { id },
    });
  }

  // Дополнительные методы для работы с историей
  async findByEdge(edge: string) {
    return this.prisma.history.findMany({
      where: { edge },
      orderBy: { timestamp: 'desc' },
    });
  }

  async findByTag(tag: string) {
    return this.prisma.history.findMany({
      where: { tag },
      orderBy: { timestamp: 'desc' },
    });
  }
}
