import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentLifecycleRoutingModule } from './component-lifecycle-routing.module';

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

@NgModule({
  declarations: [
    ComponentLifecycleComponent,
    ComponentLifecycleIntroductionComponent,
    ComponentLifecycleOnChangesComponent,
    ComponentLifecycleOnInitComponent,
    ComponentLifecycleDoCheckComponent,
    ComponentLifecycleAfterContentInitComponent,
    ComponentLifecycleAfterContentCheckedComponent,
    ComponentLifecycleAfterViewInitComponent,
    ComponentLifecycleAfterViewCheckedComponent,
    ComponentLifecycleOnDestroyComponent
  ],
  imports: [
    CommonModule,
    ComponentLifecycleRoutingModule
  ]
})
export class ComponentLifecycleModule { }
