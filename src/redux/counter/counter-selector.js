import { createSelector } from 'reselect';

const selectCounter = state => state.counter;

export const selectCurrentCounter = createSelector(
  [selectCounter],
  counter => counter.currentCounter
);