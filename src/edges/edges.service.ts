import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class EdgesService {
  constructor(private prisma: PrismaService) {}

  async findAllDistinctEdges(): Promise<string[]> {
    const result = await this.prisma.current.findMany({
      select: {
        edge: true,
      },
      distinct: ['edge'],
    });

    return result.map(item => item.edge);
  }
}
