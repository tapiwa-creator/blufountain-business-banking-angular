import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loans.component.html',
  styleUrl: './loans.component.css'
})
export class LoansComponent {
  activeLoans = [
    { type: 'Commercial Property', accountNumber: '9482-104', principal: '5,000,000.00', balance: '4,250,000.00', interestRate: 'Prime - 1%', nextInstallment: '42,500.00', dueDate: '1 Mar 2026', progress: 85, status: 'Healthy' },
    { type: 'Vehicle Fleet Finance', accountNumber: '9482-105', principal: '2,500,000.00', balance: '1,850,000.00', interestRate: 'Prime + 0.5%', nextInstallment: '28,400.00', dueDate: '5 Mar 2026', progress: 74, status: 'Healthy' },
    { type: 'Working Capital Line', accountNumber: '9482-108', principal: '1,000,000.00', balance: '750,000.00', interestRate: 'Prime + 2%', nextInstallment: 'Interest Only', dueDate: 'On Demand', progress: 75, status: 'Review' }
  ];

  loanOffers = [
    { title: 'Working Capital Facility', amount: 'Up to $ 500,000', rate: 'Prime + 1%', term: '12 Months', icon: 'icon-briefcase' },
    { title: 'Commercial Property', amount: 'Up to $ 15,000,000', rate: 'Prime - 0.5%', term: '10 Years', icon: 'icon-home' }
  ];
}
