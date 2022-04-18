import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    MatSnackBarModule,
  ]
})
export class VendorModule {}
