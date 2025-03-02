import { OrderType } from '../../../../shared/types/OrderType';

export interface ISort {
  value: OrderType;
  title: string;
}

export interface SortSchema {
  entities: Record<string, ISort[]>;
}
