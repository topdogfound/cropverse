import { Injectable } from '@nestjs/common';
import { CreateCropDto, UpdateCropDto } from './dto';
import { CropsRepository } from './crops.repository';

@Injectable()
export class CropsService {
  constructor(
    private cropsRepo: CropsRepository
  ) {}
  create(createCropDto: CreateCropDto) {
    return this.cropsRepo.create(createCropDto)
  }

  findAll() {
    return this.cropsRepo.findAll();
  }

  findOne(id: number) {
    return this.cropsRepo.findone(id);
  }

  update(id: number, updateCropDto: UpdateCropDto) {
    return this.cropsRepo.update(id, updateCropDto);
  }

  remove(id: number) {
    return this.cropsRepo.remove(id);
  }
}
