import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

	private readonly $sidenavState = new Subject<void>();
	
	toggleSidenav(): void {
		this.$sidenavState.next();
	}

	getSidenavState() {
		return this.$sidenavState;
	}
	
}
