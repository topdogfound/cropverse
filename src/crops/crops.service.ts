import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCropDto, UpdateCropDto } from './dto';
import { CropsRepository } from './crops.repository';

@Injectable()
export class CropsService {
  constructor(private cropsRepo: CropsRepository) {}
  async create(createCropDto: CreateCropDto) {
    try {
      return await this.cropsRepo.create(createCropDto);
    } catch (error) {
      throw new BadRequestException('Failed to create crop');
    }
  }

  async findAll() {
    return await this.cropsRepo.findAll();
  }

  async findOne(id: number) {
    const crop = await this.cropsRepo.findone(id);
    if (!crop) throw new NotFoundException('Crop not found');
    return crop;
  }

  async update(id: number, updateCropDto: UpdateCropDto) {
    await this.findOne(id);
    try {
      return await this.cropsRepo.update(id, updateCropDto);
    } catch (error) {
      throw new BadRequestException('Failed to update crop');
    }
  }

  async remove(id: number) {
    await this.findOne(id);
    try {
      return await this.cropsRepo.remove(id);
    } catch (error) {
      throw new BadRequestException('Failed to delete crop');
    }
  }
}
