import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { User } from './user';
import { AuthComponent } from './auth.component';

import { LoginVariable } from '../global';

@Injectable()
export class AuthService {
	private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	// provide empty profile defenition at beginning
	private profile: BehaviorSubject<string> = new BehaviorSubject<string>(''); 

	get isLoggedIn() {
		return this.loggedIn.asObservable();
	}

	get isAValidProfile() {
		return this.profile.asObservable();
	}

	constructor(
		private router: Router
	) { }

	login(user: User): Promise<boolean> {
		return Promise.resolve(true).then(() => {
			if (user.userName == 'binuka14' && user.password == 'binga') {
				this.loggedIn.next(true);
				this.profile.next('Admin');
				LoginVariable.IS_LOGGED_IN = true;
				LoginVariable.USER_PROFILE = 'admin';
				return this.router.navigate(['/home']);
			} else if (user.userName == 'ichorville' && user.password == 'cmonbeatmeup') {
				this.loggedIn.next(true);
				LoginVariable.IS_LOGGED_IN = true;
				this.profile.next('User');
				LoginVariable.USER_PROFILE = 'user';
				return this.router.navigate(['/home']);
			} else {
				this.loggedIn.next(false);
				return true;
			}
		});
	}

	logout() {
		this.loggedIn.next(false);
		LoginVariable.IS_LOGGED_IN = false;
		this.router.navigate(['/login']);
	}
}
