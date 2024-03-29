import {createSelector} from 'reselect';

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

// export const selectCategoriesMap = (state) => {
//     console.log('selector fired')
//     const categoriesMap =  state.categories.categories.reduce(
//         (acc, {title, items}) => {
//             acc[title.toLowerCase()] = items;
//         return acc;
//     }, {});

//     return categoriesMap;
// };

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
)