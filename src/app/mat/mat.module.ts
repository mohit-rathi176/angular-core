import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const MAT_MODULES = [
	MatToolbarModule,
	MatButtonModule,
	MatIconModule
];

@NgModule({
  imports: [
    ...MAT_MODULES
  ],
	exports: [
		...MAT_MODULES
	]
})
export class MatModule { }
