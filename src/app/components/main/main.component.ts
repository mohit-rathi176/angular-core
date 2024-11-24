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
			]
		},
		{
			title: 'Directives',
			link: '/directives',
			isRoot: true
		},
		{
			title: 'Pipes',
			link: '/pipes',
			isRoot: true
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
