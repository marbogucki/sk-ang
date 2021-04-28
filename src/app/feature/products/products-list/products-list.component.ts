import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../state/products.state';
import * as ProductsActions from '../state/products.actions';
import * as ProductsSelectors from '../state/products.selectors';
import { Product } from './product';

@Component({
  selector: 'sbapp-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  public isCodeDisplayed$: Observable<boolean>;
  public currentProduct$: Observable<Product>;
  public products: Product[] = [
    {
      id: 1,
      name: 'Product1',
    },
    {
      id: 2,
      name: 'Product2',
    },
    {
      id: 3,
      name: 'Product3',
    },
    {
      id: 4,
      name: 'Product4',
    },
  ];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.isCodeDisplayed$ = this.store.select(ProductsSelectors.selectShowProductCode);
    this.currentProduct$ = this.store.select(ProductsSelectors.selectCurrentProduct);
  }

  toggleProductCode(): void {
    this.store.dispatch(ProductsActions.toggleProductCode());
  }

  setCurrentProduct(product: Product): void {
    this.store.dispatch(ProductsActions.setCurrentProduct({ product }));
  }

  clearCurrentProduct(): void {
    this.store.dispatch(ProductsActions.clearCurrentProduct());
  }
}
