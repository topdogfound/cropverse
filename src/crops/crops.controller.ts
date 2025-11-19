import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CropsService } from './crops.service';
import { CreateCropDto, UpdateCropDto } from './dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('crops')
@Controller('crops')
export class CropsController {
  constructor(private readonly cropsService: CropsService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Crop created' })
  create(@Body() createCropDto: CreateCropDto) {
    return this.cropsService.create(createCropDto);
  }

  @Get()
  findAll() {
    return this.cropsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cropsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCropDto: UpdateCropDto) {
    return this.cropsService.update(+id, updateCropDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cropsService.remove(+id);
  }
}
