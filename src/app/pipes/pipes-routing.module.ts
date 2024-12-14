import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PipesComponent } from './pipes.component';
import { PipesIntroductionComponent } from './pipes-introduction/pipes-introduction.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesRoutingModule { }
