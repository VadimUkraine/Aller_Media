import { createSelector } from 'reselect';

const articlesStateSelector = (state) => state.articles;

export const articlesSelector = createSelector(
  articlesStateSelector,
  (state) => state.items,
);

export default articlesSelector;
