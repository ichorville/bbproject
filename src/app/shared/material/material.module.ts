import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatRadioModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';

@NgModule({
    imports: [
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatSelectModule,
        MatSidenavModule,
        MatTabsModule,
        MatInputModule,
        MatExpansionModule,
        MatToolbarModule,
        MatCheckboxModule
    ],
    exports: [
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatSelectModule,
        MatSidenavModule,
        MatTabsModule,
        MatInputModule,
        MatExpansionModule,
        MatToolbarModule,
        MatCheckboxModule
    ]
})
export class MaterialModule {}