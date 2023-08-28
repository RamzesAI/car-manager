import { IsNumber, IsString } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: 'Brand must be a string' })
  brand: string;

  @IsString({ message: 'Model must be a string' })
  name: string;

  @IsNumber({}, { message: 'Year must be a number' })
  year: number;

  @IsNumber({}, { message: 'Price must be a number' })
  price: number;
}
