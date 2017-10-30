import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

import { fadeInAnimation } from '../../../shared/animations/fade-in.animation';

import { FormElement } from '../../../shared/form-elements/form-element';
import { FormTextbox } from '../../../shared/form-elements/form-textbox';
import { FormDropdown } from '../../../shared/form-elements/form-dropdown';

import { FormSubmitEvent } from '../../../shared/custom-events/form-submit-event';
import { FormSubmitCompleteEvent } from '../../../shared/custom-events/form-submit-complete-event';

import { LoginVariable } from '../../../global';

@Component({
	selector: 'app-company-master-add',
	templateUrl: './company-master-add.component.html',
	styleUrls: ['./company-master-add.component.css'],
	animations: [fadeInAnimation],
	host: { '[@fadeInAnimation]': '' }
})
export class CompanyMasterAddComponent implements OnInit {

	title: string;
	buttonValue: string;
	formElements: FormElement<any>[];

	constructor(
		private router: Router
	) { 
		this.title = 'Add Outlet';
		this.buttonValue = 'Save';
		this.createForm();
	}

	ngOnInit() {
		if (LoginVariable.IS_LOGGED_IN == false) {
			this.router.navigateByUrl(`/login`);
		}
	}

	submit(formSubmitEvent: FormSubmitEvent) {

	}

	private createForm() {
		this.formElements = [
			new FormTextbox({
				key: 'id',
				label: 'Id',
				value: '',
				controlType: 'textbox',
				required: true,
				order: 1,
				placeholder: 'Id',
				validators: [
					Validators.required
				]
			})
		];
	}
}
