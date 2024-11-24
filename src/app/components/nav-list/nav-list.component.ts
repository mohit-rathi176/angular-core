import { Component, input } from '@angular/core';
import { INavItem } from '../../models/NavItem';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrl: './nav-list.component.scss'
})
export class NavListComponent {

	navItems = input.required<INavItem[]>();

}
