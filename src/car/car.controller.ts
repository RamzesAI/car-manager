import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { Car } from './schemas/car.schema';
import { ApiTags } from '@nestjs/swagger';
import { GetCarDto } from './dto/get-cars.dto';

@ApiTags('Cars')
@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}
  @Get()
  async getAllCarsWithSort(
    @Query(new ValidationPipe()) params: GetCarDto,
  ): Promise<Car[]> {
    return this.carService.getAllCarsWithSort(params);
  }

  @Post()
  async create(
    @Body(new ValidationPipe()) createCarDto: CreateCarDto,
  ): Promise<Car> {
    return this.carService.create(createCarDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<string> {
    return this.carService.delete(id);
  }
}
