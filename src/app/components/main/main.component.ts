import { Component, OnInit, viewChild } from '@angular/core';
import { INavItem } from '../../models/NavItem';
import { SharedService } from '../../services/shared.service';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {

	drawer = viewChild.required(MatDrawer);

	navItems: INavItem[] = [
		{
			title: 'Component Lifecycle',
			children: [
				{
					title: 'Introduction',
					link: '/component-lifecycle/introduction'
				},
				{
					title: 'OnChanges',
					link: '/component-lifecycle/on-changes'
				},
				{
					title: 'OnInit',
					link: '/component-lifecycle/on-init'
				},
				{
					title: 'DoCheck',
					link: '/component-lifecycle/do-check'
				},
				{
					title: 'AfterContentInit',
					link: '/component-lifecycle/after-content-init'
				},
				{
					title: 'AfterContentChecked',
					link: '/component-lifecycle/after-content-checked'
				},
				{
					title: 'AfterViewInit',
					link: '/component-lifecycle/after-view-init'
				},
				{
					title: 'AfterViewChecked',
					link: '/component-lifecycle/after-view-checked'
				},
				{
					title: 'OnDestroy',
					link: '/component-lifecycle/on-destroy'
				},
				{
					title: 'Rendering',
					link: '/component-lifecycle/rendering'
				}
			]
		},
		{
			title: 'Directives',
			children: [
				{
					title: 'Introduction',
					link: '/directives/introduction'
				},
				{
					title: 'Attribute Directives',
					link: '/directives/attribute-directives'
				},
				{
					title: 'Structural Directives',
					link: '/directives/structural-directives'
				},
				{
					title: 'Custom Directives',
					link: '/directives/custom-directives'
				}
			]
		},
		{
			title: 'Pipes',
			children: [
				{
					title: 'Introduction',
					link: '/pipes/introduction'
				},
				{
					title: 'Custom Pipes',
					link: '/pipes/custom-pipes'
				},
				{
					title: 'Pure and Impure Pipes',
					link: '/pipes/pure-and-impure-pipes'
				}
			]
		}
	];

	constructor(private readonly _sharedService: SharedService) { }

	ngOnInit(): void {
		this._sharedService.getSidenavState().subscribe({
			next: () => {
				this.drawer().toggle();
			}
		});
	}

}
