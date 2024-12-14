import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';

import { MatModule } from '../mat/mat.module';

import { PipesComponent } from './pipes.component';
import { PipesIntroductionComponent } from './pipes-introduction/pipes-introduction.component';
import { PipesCustomPipesComponent } from './pipes-custom-pipes/pipes-custom-pipes.component';
import { PipesPureImpurePipesComponent } from './pipes-pure-impure-pipes/pipes-pure-impure-pipes.component';

@NgModule({
  declarations: [
    PipesComponent,
    PipesIntroductionComponent,
    PipesCustomPipesComponent,
    PipesPureImpurePipesComponent
  ],
  imports: [
    CommonModule,
    PipesRoutingModule,
    MatModule
  ]
})
export class PipesModule { }
