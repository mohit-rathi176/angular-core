import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';

import { MatModule } from '../mat/mat.module';

import { PipesComponent } from './pipes.component';
import { PipesIntroductionComponent } from './pipes-introduction/pipes-introduction.component';

@NgModule({
  declarations: [
    PipesComponent,
    PipesIntroductionComponent
  ],
  imports: [
    CommonModule,
    PipesRoutingModule,
    MatModule
  ]
})
export class PipesModule { }
