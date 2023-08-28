import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Car } from './schemas/car.schema';
import { Model } from 'mongoose';
import { SortParams } from './types/sort-direction.type';

@Injectable()
export class CarService {
  constructor(@InjectModel(Car.name) private carModel: Model<Car>) {}

  async getAllCarsWithSort(sortParams: SortParams): Promise<Car[]> {
    const { direction, field } = sortParams;
    const sortObject = {};
    sortObject[field] = direction;
    return this.carModel.find().sort(sortObject).exec();
  }

  async create(createCarDto: CreateCarDto): Promise<Car> {
    const car = new this.carModel(createCarDto);
    return car.save();
  }

  async delete(id: string): Promise<string> {
    const car = await this.carModel.findOne({ _id: id }).exec();
    if (!car) {
      throw new NotFoundException(`Запись с id: ${id} не найдена`);
    }
    const deleteResult = await this.carModel.deleteOne({ _id: id }).exec();
    if (!deleteResult.deletedCount) {
      throw new BadRequestException(`Не удалось удалить запись с id: ${id}`);
    }
    return `Запись с id: ${id} успешно удалена`;
  }
}
