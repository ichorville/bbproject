import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

import { fadeInAnimation } from '../../../shared/animations/fade-in.animation';

import { FormElement } from '../../../shared/form-elements/form-element';
import { FormTextbox } from '../../../shared/form-elements/form-textbox';
import { FormDropdown } from '../../../shared/form-elements/form-dropdown';

import { FormSubmitEvent } from '../../../shared/custom-events/form-submit-event';
import { FormSubmitCompleteEvent } from '../../../shared/custom-events/form-submit-complete-event';

import { CompanyMasterService } from '../company-master.service';

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
		private router: Router,
		private _cms: CompanyMasterService
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
		let formValues = formSubmitEvent.formObject;
		let country: any = {
			'id': formValues.id,
			'name': formValues.name,
			'address': formValues.address,
			'phone': formValues.phone,
			'email': formValues.email,
			'status': false
		};
		this._cms.create(country).then(() => {
			this.router.navigateByUrl(`/master-data/companies`);
		});
	}

	private createForm() {
		this.formElements = [
			new FormTextbox({
				key: 'id',
				label: 'Company Code',
				value: '',
				controlType: 'textbox',
				required: true,
				order: 1,
				placeholder: 'Company Code',
				validators: [
					Validators.required
				]
			}),
			new FormTextbox({
				key: 'name',
				label: 'Company Name',
				value: '',
				controlType: 'textbox',
				required: true,
				order: 2,
				placeholder: 'Company Name'
			}),
			new FormTextbox({
				key: 'address',
				label: 'Address',
				value: '',
				controlType: 'textbox',
				required: true,
				order: 3,
				placeholder: 'Address'
			}),
			new FormTextbox({
				key: 'phone',
				label: 'Phone',
				value: '',
				controlType: 'textbox',
				required: true,
				order: 4,
				placeholder: 'Phone',
				validators: [
					Validators.required
				]
			}),
			new FormTextbox({
				key: 'email',
				label: 'Email',
				value: '',
				controlType: 'textbox',
				required: true,
				order: 5,
				placeholder: 'Email',
				validators: [
					Validators.required
				]
			})
		];
	}
}
