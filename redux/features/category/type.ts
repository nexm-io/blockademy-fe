export interface CategoryType {
  categoryLoading: boolean;
  data: [];
  currCategory: number;
}

export const defaultCategoryReducer: CategoryType = {
  categoryLoading: true,
  data: [],
  currCategory: 0,
};
