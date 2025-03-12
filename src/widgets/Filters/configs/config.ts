import { IFilterProperties } from '../model/types/types';
import PeopleFilters from './peopleFilters/peopleFilters';

const FILTERS: Record<string, IFilterProperties[]> = {
  '/people': PeopleFilters(),
};

export const getFiltersData = (path: string): IFilterProperties[] => FILTERS[path] || [];
