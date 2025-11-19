import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateCropDto, UpdateCropDto } from './dto';


@Injectable()
export class CropsRepository {
    constructor(
        private prisma: PrismaService,
    ) {}

    create(data: CreateCropDto) {
        return this.prisma.crop.create({data});
    }
    findAll() {
        return this.prisma.crop.findMany();
    }
    findone(id: number) {
        return this.prisma.crop.findUnique({where: { id }});
    }

    update(id: number, data: UpdateCropDto) {
        return this.prisma.crop.update({where: { id }, data});
    }
    remove(id: number) {
        return this.prisma.crop.delete({where: { id }});
    }
}