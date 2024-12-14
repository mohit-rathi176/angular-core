import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'component-lifecycle',
		pathMatch: 'full'
	},
	{
		path: 'component-lifecycle',
		loadChildren: () => import('./component-lifecycle/component-lifecycle.module').then(m => m.ComponentLifecycleModule)
	},
	{
		path: 'directives',
		loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule)
	},
	{
		path: 'pipes',
		loadChildren: () => import('./pipes/pipes.module').then(m => m.PipesModule)
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
