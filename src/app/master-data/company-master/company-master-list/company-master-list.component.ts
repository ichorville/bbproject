import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CompanyMasterService } from '../company-master.service';

import { DeleteEvent } from '../../../shared/custom-events/delete-event';
import { LoginVariable } from '../../../global';

@Component({
	selector: 'app-company-master-list',
	templateUrl: './company-master-list.component.html',
	styleUrls: ['./company-master-list.component.css']
})
export class CompanyMasterListComponent implements OnInit {

	addButton: boolean;
	taskEdit: boolean;
	taskDelete: boolean;

	completed = false;

	companies: any[];
	rows: any[];
	url: string;
	columns: any[];
	title: string;

	constructor(
		private router: Router,
		private _cms: CompanyMasterService
	) { 
		this.addButton = true;
		this.taskEdit = true;
		this.taskDelete = true;
		this.rows = [];
	}

	ngOnInit() {
		if (LoginVariable.IS_LOGGED_IN == false) {
			return this.router.navigateByUrl(`/login`);
		}	
		this._cms.all().then((companies) => {
			this.companies = companies;
			this.updateRows();
		});
		this.title = 'Companies';
		this.url = '/master-data/companies/';
		this.columns = [
			{ name: 'ID', attr: 'id', type: 'string' },
			{ name: 'Name', attr: 'name', type: 'string' },
			{ name: 'Address', attr: 'address', type: 'string' },
			{ name: 'Phone', attr: 'phone', type: 'string' },
			{ name: 'Email', attr: 'email', type: 'string' }
		];
	}

	delete(deleteEvent: DeleteEvent) {
		console.log(deleteEvent);
	}

	private updateRows() {
		this.rows = [];
		this.companies.forEach(element => {
			this.rows.push({
				id: element.id,
				name: element.name,
				address: element.address,
				phone: element.phone,
				email: element.email
			});
		});
		this.completed = true;
	}
}
