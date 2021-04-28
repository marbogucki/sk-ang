import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';

const productsRoutes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(productsRoutes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
