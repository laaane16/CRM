import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '../../../../../app/providers';

const getScrollPosition = (state: StateSchema) => state.saveScroll.map;
export const getScrollPositionByPath = createSelector(
  [getScrollPosition, (state: StateSchema, path: string) => path],
  (scroll, path) => scroll[path] || 0,
);
