import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { NgToolsComponent } from './feature/ng-tools/ng-tools.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'ng-tools',
    component: NgToolsComponent,
  },
  {
    path: 'products',
    loadChildren: () => import('./feature/products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'template-driven-form',
    loadChildren: () =>
      import('./feature/template-driven-form/template-driven-form.module').then((m) => m.TemplateDrivenFormModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
