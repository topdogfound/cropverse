import { ApiProperty, ApiSchema } from '@nestjs/swagger';
import { Category } from 'generated/prisma';

@ApiSchema({
  name: 'Crop Response DTO',
  description: 'Represents a crop record returned by the API',
})
export class CropResponseDto {
  @ApiProperty({
    description: 'Unique identifier of the crop',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Name of the crop',
    example: 'Wheat',
  })
  name: string;

  @ApiProperty({
    description: 'Description of the crop',
    example: 'A cereal grain widely grown across the world.',
  })
  description: string;

  @ApiProperty({
    description: 'Category of the crop',
    enum: Category,
    example: Category.GRAIN,
  })
  category: Category;
}
