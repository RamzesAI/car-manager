export interface SortParams {
  direction: SortDirection;
  field: SortFields;
}

export enum SortDirection {
  asc = 'asc',
  desc = 'desc',
}

export enum SortFields {
  brand = 'brand',
  name = 'model',
  year = 'year',
  price = 'price',
}
