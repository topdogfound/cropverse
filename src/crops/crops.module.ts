import { Module } from '@nestjs/common';
import { CropsController } from './crops.controller';
import { CropsService } from './crops.service';
import { CropsRepository } from './crops.repository';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [CropsController],
  providers: [CropsService, CropsRepository, PrismaService],
})
export class CropsModule {}
