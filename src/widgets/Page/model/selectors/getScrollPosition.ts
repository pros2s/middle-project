import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

export const getScrollPositionByPath = createSelector(
  [
    (state: StateSchema) => state.scroll.scroll,
    (state: StateSchema, path: string) => path,
  ],
  (scroll, path) => scroll[path] || 0,
);
