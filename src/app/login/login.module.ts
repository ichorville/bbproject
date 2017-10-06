import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../shared/material/material.module';

import { LoginComponent } from './login.component';
import { routing } from './login.routing';

import { AuthService } from '../auth/auth.service';

@NgModule({
	imports: [
		BrowserModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		MaterialModule,
		BrowserAnimationsModule,
		routing
	],
	declarations: [
		LoginComponent
	],
	providers: [
		AuthService
	],
  exports: [LoginComponent]
})
export class LoginModule { }
