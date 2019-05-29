import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'painel', component: DashboardComponent },
    { path: 'negociacoes', component: TableListComponent },
    { path: '**', component: DashboardComponent },
];
