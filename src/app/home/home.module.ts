import { NgModule } 	from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../shared/material/material.module';

import { HomeComponent } from './home.component';
import { routing } from './home.routing';

@NgModule({
	imports: [
		CommonModule, 
		BrowserModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		routing
	],
	declarations: [
		HomeComponent
	],
	providers: [
		
	]
})

export class HomeModule {}