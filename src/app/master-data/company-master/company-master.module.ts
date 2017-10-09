import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../../shared/material/material.module';

import { CompanyMasterComponent } from './company-master.component';
import { CompanyMasterAddComponent } from './company-master-add/company-master-add.component';
import { CompanyMasterEditComponent } from './company-master-edit/company-master-edit.component';
import { CompanyMasterDetailsComponent } from './company-master-details/company-master-details.component';
import { CompanyMasterListComponent } from './company-master-list/company-master-list.component';

import { routing } from './company-master.routing';

import { CompanyMasterService } from './company-master.service';

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CommonModule,
		MaterialModule,
		routing
	],
	declarations: [
		CompanyMasterComponent, 
		CompanyMasterAddComponent, 
		CompanyMasterEditComponent, 
		CompanyMasterDetailsComponent, 
		CompanyMasterListComponent
	],
	providers: [
		CompanyMasterService
	]
})
export class CompanyMasterModule { }
