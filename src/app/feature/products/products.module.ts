import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './state/products.reducer';
import { ProductsNameState } from './state/products.state';

@NgModule({
  declarations: [ProductsListComponent],
  imports: [CommonModule, StoreModule.forFeature(ProductsNameState.Products, productsReducer), ProductsRoutingModule],
})
export class ProductsModule {}
