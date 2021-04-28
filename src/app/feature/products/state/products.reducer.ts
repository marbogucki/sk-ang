import { createReducer, on } from '@ngrx/store';
import { ProductsState } from './products.state';
import * as ProductsActions from './products.actions';

const initialProductState: ProductsState = {
  showProductCode: false,
  products: [],
  loading: false,
  currentProduct: null,
};

const onToggleProductCode = (state: ProductsState): ProductsState => ({
  ...state,
  showProductCode: !state.showProductCode,
});

const onSetCurrentProduct = (state: ProductsState, action: ProductsActions.ProductProps) => ({
  ...state,
  currentProduct: action.product,
});

const onClearCurrentProduct = (state: ProductsState) => ({
  ...state,
  currentProduct: null,
});

export const productsReducer = createReducer<ProductsState>(
  initialProductState,
  on(ProductsActions.toggleProductCode, onToggleProductCode),
  on(ProductsActions.setCurrentProduct, onSetCurrentProduct),
  on(ProductsActions.clearCurrentProduct, onClearCurrentProduct)
);
