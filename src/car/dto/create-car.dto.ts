import { IsInt, IsString } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: 'Brand must be a string' })
  brand: string;

  @IsString({ message: 'Model must be a string' })
  model: string;

  @IsInt({ message: 'Year must be a number' })
  year: number;

  @IsInt({ message: 'Price must be a number' })
  price: number;
}
