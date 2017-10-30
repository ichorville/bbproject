import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginModule } from './login/login.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { MaterialModule } from './shared/material/material.module';
import { NoConflictStyleCompatibilityMode} from '@angular/material';

import { MasterDataModule } from './master-data/master-data.module';

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
		NoConflictStyleCompatibilityMode,
		LoginModule,
		SidenavModule,
		HomeModule,
		AuthModule,
		MasterDataModule,
		routing
	],
	providers: [

	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
