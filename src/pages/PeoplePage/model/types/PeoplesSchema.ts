import { SerializedError } from '@reduxjs/toolkit';
import { IEmployee } from '../../../../entities/Employee/ui/EmployeesCard/EmployeesCard';
import { OrderType } from '../../../../shared/types/Order';

export enum IView {
  GRID = 'grid',
  LIST = 'list',
}

export interface PeoplesSchema {
  ids: number[];
  entities: Record<string, IEmployee>;
  isLoading: boolean;
  error?: SerializedError;
  view: IView;
  page: number;
  hasMore: boolean;
  limit: number;
  search?: string;
  sortField?: string;
  order?: OrderType;

  _inited: boolean;
}
