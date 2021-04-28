import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TdfComponent } from './tdf/tdf.component';

const routes: Routes = [
  {
    path: '',
    component: TdfComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplateDrivenFormRoutingModule {}
