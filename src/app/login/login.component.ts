import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { fadeInAnimation } from '../shared/animations/fade-in.animation';

import { AuthService } from './../auth/auth.service';

import { LoginVariable } from '../global';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	animations: [fadeInAnimation],
	host: {'[@fadeInAnimation]': ''}
})

export class LoginComponent implements OnInit {

	form: FormGroup;
	private formSubmitAttempt: boolean;
	private loginAttempt;

	constructor(
		private fb: FormBuilder,
		private authService: AuthService
	) { }

	ngOnInit() {
		LoginVariable.IS_LOGGED_IN == false;
		this.form = this.fb.group({
			userName: [
				'', Validators.required
			],
			password: [
				'', Validators.required
			]
		});
	}

	isFieldInvalid(field: string) {
		return (
			(!this.form.get(field).valid && this.form.get(field).touched) ||
			(this.form.get(field).untouched && this.formSubmitAttempt)
		);
	}

	onSubmit() {
		if (this.form.valid) {
			this.authService.login(this.form.value).then((result?) => {
				//this.formSubmitAttempt = result;
				this.loginAttempt = result;
			});
		}	
	}
}
