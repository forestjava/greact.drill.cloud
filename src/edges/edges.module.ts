import { Module } from '@nestjs/common';
import { EdgesController } from './edges.controller';
import { EdgesService } from './edges.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [EdgesController],
  providers: [EdgesService, PrismaService],
})
export class EdgesModule {}
