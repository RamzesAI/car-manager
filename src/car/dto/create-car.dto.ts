import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateCarDto {
  @ApiProperty({ default: 'Лада' })
  @IsString({ message: 'Brand must be a string' })
  brand: string;

  @ApiProperty({ default: 'Веста' })
  @IsString({ message: 'Model must be a string' })
  model: string;

  @ApiProperty({ default: 2020 })
  @IsInt({ message: 'Year must be a number' })
  year: number;

  @ApiProperty({ default: 20000 })
  @IsInt({ message: 'Price must be a number' })
  price: number;
}
