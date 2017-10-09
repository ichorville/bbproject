import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidenavComponent } from '../../sidenav/sidenav.component';
import { CompanyMasterAddComponent } from './company-master-add/company-master-add.component';
import { CompanyMasterEditComponent } from './company-master-edit/company-master-edit.component';
import { CompanyMasterDetailsComponent } from './company-master-details/company-master-details.component';
import { CompanyMasterListComponent } from './company-master-list/company-master-list.component';

const companyMasterRoutes: Routes = [
	{
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '',
        component: SidenavComponent,
        children: [
            {
				path: '',
				redirectTo: '/master-data/companies',
				pathMatch: 'full'
			},
			{
				path: 'master-data/companies',
				component: CompanyMasterListComponent
			},
			{
				path: 'master-data/companies/add',
				component: CompanyMasterAddComponent
			},
			{
				path: 'master-data/companies/:id',
				component: CompanyMasterDetailsComponent
			},
			{
				path: 'master-data/companies/:id/edit',
				component: CompanyMasterEditComponent
			}
        ]
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(companyMasterRoutes);