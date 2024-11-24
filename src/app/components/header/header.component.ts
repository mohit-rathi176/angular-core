import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

	constructor(private readonly _sharedService: SharedService) { }

	toggleSidenav(): void {
		this._sharedService.toggleSidenav();
	}

}
