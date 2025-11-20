import { ApiProperty, ApiSchema } from '@nestjs/swagger';
import { IsEnum, IsString, IsNotEmpty } from 'class-validator';
import { Category } from 'generated/prisma';

@ApiSchema({
  name: 'Create Crop DTO',
  description: 'Data Transfer Object for creating a new crop',
})
export class CreateCropDto {
  @ApiProperty({
    description: 'Name of the crop', 
    minimum: 1,
    default: 'wheat',
    type: 'string',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Description of the crop', 
    minimum: 1,
    default: 'A cereal grain',
  })
  @IsString()
  description: string;

  @ApiProperty({ 
    enum: Category, 
    default: Category.GRAIN,
  })
  @IsEnum(Category)
  category: Category;
}
