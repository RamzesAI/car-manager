import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarModule } from './car/car.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/cars'), CarModule],
})
export class AppModule {}
