import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginModule } from './login/login.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { MaterialModule } from './shared/material/material.module';

import 'hammerjs';
import './rxjs-extensions';

import { AppComponent } from './app.component';

import { routing } from './app.routing';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MaterialModule,
		LoginModule,
		SidenavModule,
		HomeModule,
		AuthModule,
		routing
	],
	providers: [

	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
