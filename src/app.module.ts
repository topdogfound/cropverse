import { Module } from '@nestjs/common';
import { CropsModule } from './crops/crops.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CropsModule, PrismaModule],
  providers: [ PrismaService],
})
export class AppModule {}
