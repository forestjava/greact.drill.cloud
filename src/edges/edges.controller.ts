import { Controller, Get, Header } from '@nestjs/common';
import { EdgesService } from './edges.service';

@Controller('edges')
export class EdgesController {
  constructor(private readonly edgesService: EdgesService) {}

  @Get()
  @Header('Cache-Control', 'no-store')
  @Header('Pragma', 'no-cache')
  @Header('Expires', '0')
  findAllDistinctEdges() {
    return this.edgesService.findAllDistinctEdges();
  }
}
