import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';

import { MatModule } from '../mat/mat.module';

import { DirectivesComponent } from './directives.component';
import { DirectivesIntroductionComponent } from './directives-introduction/directives-introduction.component';
import { DirectivesAttributeDirectivesComponent } from './directives-attribute-directives/directives-attribute-directives.component';
import { DirectivesStructuralDirectivesComponent } from './directives-structural-directives/directives-structural-directives.component';
import { DirectivesCustomDirectivesComponent } from './directives-custom-directives/directives-custom-directives.component';

@NgModule({
  declarations: [
    DirectivesComponent,
    DirectivesIntroductionComponent,
    DirectivesAttributeDirectivesComponent,
    DirectivesStructuralDirectivesComponent,
    DirectivesCustomDirectivesComponent
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule,
    MatModule
  ]
})
export class DirectivesModule { }
