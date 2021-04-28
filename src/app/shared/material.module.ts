import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const MaterialModules = [MatButtonModule, MatFormFieldModule, MatInputModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModules],
  exports: [MaterialModules],
})
export class MaterialModule {}
