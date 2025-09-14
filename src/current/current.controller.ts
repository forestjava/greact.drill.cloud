import { Controller, Get, Post, Body, Patch, Param, Delete, Header } from '@nestjs/common';
import { CurrentService } from './current.service';
import { CreateCurrentDto } from './dto/create-current.dto';
import { UpdateCurrentDto } from './dto/update-current.dto';

@Controller('current')
export class CurrentController {
  constructor(private readonly currentService: CurrentService) { }

  @Post()
  create(@Body() createCurrentDto: CreateCurrentDto) {
    return this.currentService.create(createCurrentDto);
  }

  @Get()
  @Header('Cache-Control', 'no-store')
  @Header('Pragma', 'no-cache')
  @Header('Expires', '0')
  findAll() {
    return this.currentService.findAll();
  }

  @Get(':id')
  @Header('Cache-Control', 'no-store')
  @Header('Pragma', 'no-cache')
  @Header('Expires', '0')
  findOne(@Param('id') id: string) {
    return this.currentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCurrentDto: UpdateCurrentDto) {
    return this.currentService.update(+id, updateCurrentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.currentService.remove(+id);
  }
}
