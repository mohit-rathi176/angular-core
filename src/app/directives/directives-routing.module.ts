import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DirectivesComponent } from './directives.component';
import { DirectivesIntroductionComponent } from './directives-introduction/directives-introduction.component';
import { DirectivesAttributeDirectivesComponent } from './directives-attribute-directives/directives-attribute-directives.component';
import { DirectivesStructuralDirectivesComponent } from './directives-structural-directives/directives-structural-directives.component';
import { DirectivesCustomDirectivesComponent } from './directives-custom-directives/directives-custom-directives.component';

const routes: Routes = [
  {
    path: '',
    component: DirectivesComponent,
    children: [
      {
        path: '',
        redirectTo: 'introduction',
        pathMatch: 'full'
      },
      {
        path: 'introduction',
        component: DirectivesIntroductionComponent
      },
      {
        path: 'attribute-directives',
        component: DirectivesAttributeDirectivesComponent
      },
      {
        path: 'structural-directives',
        component: DirectivesStructuralDirectivesComponent
      },
      {
        path: 'custom-directives',
        component: DirectivesCustomDirectivesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule { }
