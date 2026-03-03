import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SummaryCardComponent } from '../../components/summary-card/summary-card.component';
import { AccountCardComponent } from '../../components/account-card/account-card.component';
import { QuickActionsComponent } from '../../components/quick-actions/quick-actions.component';
import { TransactionListComponent } from '../../components/transaction-list/transaction-list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, SummaryCardComponent, AccountCardComponent, QuickActionsComponent, TransactionListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  userName = 'Kennedy - Chengeta Enterprises (Pvt) Ltd';
  currentDate = new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(new Date());

  summaryCards = [
    { title: 'Total Funds', amount: '284,500', subtitle: 'Across 3 accounts', icon: 'icon-wallet', color: 'blue' },
    { title: 'Payables This Month', amount: '67,200', subtitle: '14 scheduled', icon: 'icon-arrow-up', color: 'green' },
    { title: 'Receivables Pending', amount: '112,000', subtitle: '8 outstanding', icon: 'icon-arrow-down', color: 'purple' },
    { title: 'Overdue Payments', amount: '18,400', subtitle: '3 overdue', icon: 'icon-exclamation', color: 'red' }
  ];

  accounts = [
    { type: 'Business Current', name: 'Chengeta Enterprises', number: '4062-874-10-3', balance: '184,250.00', tag: 'Primary', variant: 'blue' as const, currency: '$' },
    { type: 'Business Savings', name: 'Operations Reserve', number: '4062-874-10-4', balance: '75,800.00', tag: 'Savings', variant: 'green' as const, currency: '$' },
    { type: 'USD Account', name: 'Foreign Currency', number: '4062-874-10-5', balance: '13,450.00', currency: '$', tag: 'FX', variant: 'purple' as const }
  ];

  recentTransactions = [
    { initials: 'LS', name: 'Linkway Suppliers', meta: 'Invoice #INV-0045 · 24 Feb', amount: '-$ 24,500.00', status: 'Invoice', color: '#f59e0b' },
    { initials: 'CR', name: 'Client Revenue - TechCo', meta: 'Project fee · 22 Feb', amount: '+$ 85,000.00', status: 'Revenue', color: '#10b981' },
    { initials: 'ZE', name: 'ZIMRA Tax Payment', meta: 'Q4 2025 · 20 Feb', amount: '-$ 11,200.00', status: 'Tax', color: '#3b82f6' },
    { initials: 'SA', name: 'Staff Salaries', meta: 'Feb 2026 payroll · 18 Feb', amount: '-$ 43,600.00', status: 'Payroll', color: '#ef4444' },
    { initials: 'UP', name: 'Utility Provider Ltd', meta: 'Feb electricity · 15 Feb', amount: '-$ 3,800.00', status: 'Utility', color: '#14b8a6' }
  ];

  upcomingPayables = [
    { day: '28', month: 'FEB', initials: 'OL', name: 'Office Lease', category: 'Property Holdings', amount: '$ 18,000', status: 'Due', color: '#f59e0b' },
    { day: '01', month: 'MAR', initials: 'IT', name: 'Internet & Telecoms', category: 'TelOne Business', amount: '$ 4,200', status: 'Scheduled', color: '#10b981' },
    { day: '26', month: 'FEB', initials: 'RM', name: 'Raw Materials', category: 'Alpha Suppliers', amount: '$ 31,500', status: 'Overdue', color: '#ef4444' },
    { day: '05', month: 'MAR', initials: 'BI', name: 'Business Insurance', category: 'Zimnat Lion', amount: '$ 6,700', status: 'Scheduled', color: '#3b82f6' }
  ];
}
