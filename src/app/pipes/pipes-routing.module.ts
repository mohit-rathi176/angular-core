import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PipesComponent } from './pipes.component';
import { PipesIntroductionComponent } from './pipes-introduction/pipes-introduction.component';
import { PipesCustomPipesComponent } from './pipes-custom-pipes/pipes-custom-pipes.component';
import { PipesPureImpurePipesComponent } from './pipes-pure-impure-pipes/pipes-pure-impure-pipes.component';

const routes: Routes = [
  {
    path: '',
    component: PipesComponent,
    children: [
      {
        path: '',
        redirectTo: 'introduction',
        pathMatch: 'full'
      },
      {
        path: 'introduction',
        component: PipesIntroductionComponent
      },
      {
        path: 'custom-pipes',
        component: PipesCustomPipesComponent
      },
      {
        path: 'pure-and-impure-pipes',
        component: PipesPureImpurePipesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesRoutingModule { }
