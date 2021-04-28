import { AppState } from 'src/app/state/app.state';
import { Product } from '../products-list/product';

export enum ProductsNameState {
  Products = 'products',
}

export interface State extends AppState {
  products: ProductsState;
}

export interface ProductsState {
  showProductCode: boolean;
  products: string[];
  loading: boolean;
  currentProduct: Product;
}
