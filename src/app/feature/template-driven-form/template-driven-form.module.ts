import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateDrivenFormRoutingModule } from './template-driven-form-routing.module';
import { TdfComponent } from './tdf/tdf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TdfComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TemplateDrivenFormRoutingModule],
})
export class TemplateDrivenFormModule {}
