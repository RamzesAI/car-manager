import { ApiProperty } from '@nestjs/swagger';
import { SortDirection, SortFields } from '../types/sort-direction.type';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class GetCarDto {
  @ApiProperty({ default: 'asc' })
  @IsNotEmpty()
  @IsEnum(SortDirection)
  direction: SortDirection;

  @ApiProperty({ default: 'brand' })
  @IsNotEmpty()
  @IsEnum(SortFields)
  field: SortFields;
}
