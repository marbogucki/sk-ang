import { createAction, props } from '@ngrx/store';
import { Product } from '../products-list/product';

export type ProductProps = {
  product: Product;
};

export const toggleProductCode = createAction('[Products] Toggle Product Code');

export const setCurrentProduct = createAction('[Product] Set Current Product', props<ProductProps>());

export const clearCurrentProduct = createAction('[Product] Clear Current Product');
