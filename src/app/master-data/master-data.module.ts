import { NgModule } 	from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CompanyMasterModule } from './company-master/company-master.module';

import { MasterDataComponent } from './master-data.component';

@NgModule({
	imports: [
		BrowserModule,
		CommonModule,
		BrowserAnimationsModule,
		CompanyMasterModule
	],
	declarations: [
		MasterDataComponent
	]
})
export class MasterDataModule { }
