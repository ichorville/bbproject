import { NgModule } 	from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material/material.module';
import { AuthComponent } from './auth.component';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@NgModule({
	imports: [
		CommonModule, 
		BrowserModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [
		AuthComponent
	],
	providers: [
        AuthGuard,
        AuthService
    ]
})

export class AuthModule {}