import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState, ProductsNameState } from './products.state';

const selectProductsFeatureState = createFeatureSelector<ProductsState>(ProductsNameState.Products);

export const selectShowProductCode = createSelector(
  selectProductsFeatureState,
  (state: ProductsState) => state.showProductCode
);

export const selectCurrentProduct = createSelector(
  selectProductsFeatureState,
  (state: ProductsState) => state.currentProduct
);
