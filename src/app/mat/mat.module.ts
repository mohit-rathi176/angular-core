import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

const MAT_MODULES = [
	MatToolbarModule,
	MatSidenavModule,
	MatButtonModule,
	MatIconModule,
	MatExpansionModule
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
