import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoansComponent } from './pages/loans/loans.component';
import { FxForexComponent } from './pages/fx-forex/fx-forex.component';
import { BorrowComponent } from './pages/borrow/borrow.component';
import { InvestComponent } from './pages/invest/invest.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'loans', component: LoansComponent },
    { path: 'fx-forex', component: FxForexComponent },
    { path: 'borrow', component: BorrowComponent },
    { path: 'invest', component: InvestComponent },
    { path: '**', redirectTo: 'dashboard' }
];
