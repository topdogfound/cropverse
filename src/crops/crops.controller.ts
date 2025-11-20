import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CropsService } from './crops.service';
import { CreateCropDto, UpdateCropDto, CropResponseDto } from './dto';
import {
  ApiTags,
  ApiResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('Crops')
@Controller('crops')
export class CropsController {
  constructor(private readonly cropsService: CropsService) {}

  // CREATE
  @Post()
  @ApiCreatedResponse({
    description: 'Crop created successfully.',
    type: CropResponseDto,
  })
  @ApiBadRequestResponse({ description: 'Validation failed or duplicate crop.' })
  @ApiBody({ type: CreateCropDto })
  create(@Body() createCropDto: CreateCropDto) {
    return this.cropsService.create(createCropDto);
  }

  // LIST
  @Get()
  @ApiOkResponse({
    description: 'List of all crops.',
    type: [CropResponseDto],
  })
  findAll() {
    return this.cropsService.findAll();
  }

  // GET SINGLE
  @Get(':id')
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Crop ID',
  })
  @ApiOkResponse({
    description: 'Crop details fetched successfully.',
    type: CropResponseDto,
  })
  @ApiNotFoundResponse({ description: 'Crop not found.' })
  findOne(@Param('id') id: string) {
    return this.cropsService.findOne(+id);
  }

  // UPDATE
  @Patch(':id')
  @ApiParam({
    name: 'id',
    type: Number,
  })
  @ApiOkResponse({
    description: 'Crop updated successfully.',
    type: CropResponseDto,
  })
  @ApiBadRequestResponse({ description: 'Invalid update payload.' })
  @ApiNotFoundResponse({ description: 'Crop not found.' })
  update(@Param('id') id: string, @Body() updateCropDto: UpdateCropDto) {
    return this.cropsService.update(+id, updateCropDto);
  }

  // DELETE
  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: Number,
  })
  @ApiOkResponse({
    description: 'Crop deleted successfully.',
    type: CropResponseDto,
  })
  @ApiNotFoundResponse({ description: 'Crop not found.' })
  remove(@Param('id') id: string) {
    return this.cropsService.remove(+id);
  }
}
