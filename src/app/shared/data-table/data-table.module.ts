import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../material/material.module';
import { PaginationModule } from '../pagination/pagination.module';
import { SearchModule } from '../search/search.module';

import { DataTableComponent } from './data-table.component';

import { PaginationService } from '../services/pagination.service';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		PaginationModule,
		MaterialModule,
		SearchModule,
		BrowserModule,
		BrowserAnimationsModule
	],
	declarations: [
		DataTableComponent
	],
	exports: [
		DataTableComponent
	],
	providers: [
		PaginationService
	]
})

export class DataTableModule {}