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
      throw new NotFoundException(`Record with id: ${id} not found`);
    }
    const deleteResult = await this.carModel.deleteOne({ _id: id }).exec();
    if (!deleteResult.deletedCount) {
      throw new BadRequestException(`Failed to delete record with id: ${id}`);
    }
    return `Record with id: ${id} was successfully deleted`;
  }
}
