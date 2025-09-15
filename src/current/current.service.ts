import { Injectable } from '@nestjs/common';
import { CreateCurrentDto } from './dto/create-current.dto';
import { UpdateCurrentDto } from './dto/update-current.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CurrentService {
  constructor(private prisma: PrismaService) { }

  async create(createCurrentDto: CreateCurrentDto) {
    return this.prisma.current.upsert({
      where: {
        edge_tag: {
          edge: createCurrentDto.edge,
          tag: createCurrentDto.tag,
        },
      },
      update: {
        value: createCurrentDto.value,
      },
      create: createCurrentDto,
    });
  }

  async findAll() {
    return this.prisma.current.findMany({
      orderBy: [{ edge: 'asc' }, { tag: 'asc' }],
    });
  }

  async findOne(id: number) {
    return this.prisma.current.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateCurrentDto: UpdateCurrentDto) {
    return this.prisma.current.update({
      where: { id },
      data: updateCurrentDto,
    });
  }

  async remove(id: number) {
    return this.prisma.current.delete({
      where: { id },
    });
  }

  // Дополнительные методы для работы с текущими значениями
  async findByEdge(edge: string) {
    return this.prisma.current.findMany({
      where: { edge },
      orderBy: { tag: 'asc' },
    });
  }

  async findByEdgeAndTag(edge: string, tag: string) {
    return this.prisma.current.findUnique({
      where: {
        edge_tag: { edge, tag },
      },
    });
  }

  // Получить текущие значения для указанного edge в формате { tag: value }
  async findCurrentByEdge(edge: string): Promise<Record<string, number>> {
    const records = await this.prisma.current.findMany({
      where: { edge },
      select: {
        tag: true,
        value: true,
      }
    });

    // Преобразуем в формат { tag: value }
    const result: Record<string, number> = {};
    for (const record of records) {
      result[record.tag] = record.value;
    }

    return result;
  }
}
