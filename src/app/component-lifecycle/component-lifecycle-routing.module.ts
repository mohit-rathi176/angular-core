import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentLifecycleComponent } from './component-lifecycle.component';
import { ComponentLifecycleIntroductionComponent } from './component-lifecycle-introduction/component-lifecycle-introduction.component';
import { ComponentLifecycleOnChangesComponent } from './component-lifecycle-on-changes/component-lifecycle-on-changes.component';
import { ComponentLifecycleOnInitComponent } from './component-lifecycle-on-init/component-lifecycle-on-init.component';
import { ComponentLifecycleDoCheckComponent } from './component-lifecycle-do-check/component-lifecycle-do-check.component';
import { ComponentLifecycleAfterContentInitComponent } from './component-lifecycle-after-content-init/component-lifecycle-after-content-init.component';
import { ComponentLifecycleAfterContentCheckedComponent } from './component-lifecycle-after-content-checked/component-lifecycle-after-content-checked.component';
import { ComponentLifecycleAfterViewInitComponent } from './component-lifecycle-after-view-init/component-lifecycle-after-view-init.component';
import { ComponentLifecycleAfterViewCheckedComponent } from './component-lifecycle-after-view-checked/component-lifecycle-after-view-checked.component';
import { ComponentLifecycleOnDestroyComponent } from './component-lifecycle-on-destroy/component-lifecycle-on-destroy.component';
import { ComponentLifecycleRenderingComponent } from './component-lifecycle-rendering/component-lifecycle-rendering.component';

const routes: Routes = [
	{
		path: '',
		component: ComponentLifecycleComponent,
		children: [
			{
				path: '',
				redirectTo: 'introduction',
				pathMatch: 'full'
			},
			{
				path: 'introduction',
				component: ComponentLifecycleIntroductionComponent
			},
			{
				path: 'on-changes',
				component: ComponentLifecycleOnChangesComponent
			},
			{
				path: 'on-init',
				component: ComponentLifecycleOnInitComponent
			},
			{
				path: 'do-check',
				component: ComponentLifecycleDoCheckComponent
			},
			{
				path: 'after-content-init',
				component: ComponentLifecycleAfterContentInitComponent
			},
			{
				path: 'after-content-checked',
				component: ComponentLifecycleAfterContentCheckedComponent
			},
			{
				path: 'after-view-init',
				component: ComponentLifecycleAfterViewInitComponent
			},
			{
				path: 'after-view-checked',
				component: ComponentLifecycleAfterViewCheckedComponent
			},
			{
				path: 'on-destroy',
				component: ComponentLifecycleOnDestroyComponent
			},
			{
				path: 'rendering',
				component: ComponentLifecycleRenderingComponent
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentLifecycleRoutingModule { }
