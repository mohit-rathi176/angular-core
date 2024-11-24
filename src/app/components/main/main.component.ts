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
					link: '/'
				},
				{
					title: 'OnChanges',
					link: '/'
				},
				{
					title: 'OnInit',
					link: '/'
				},
				{
					title: 'DoCheck',
					link: '/'
				},
				{
					title: 'AfterContentInit',
					link: '/'
				},
				{
					title: 'AfterContentChecked',
					link: '/'
				},
				{
					title: 'AfterViewInit',
					link: '/'
				},
				{
					title: 'AfterViewChecked',
					link: '/'
				},
				{
					title: 'OnDestroy',
					link: '/'
				},
			]
		},
		{
			title: 'Directives',
			link: '/',
			isRoot: true
		},
		{
			title: 'Pipes',
			link: '/',
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
