import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-borrow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './borrow.component.html',
  styleUrl: './borrow.component.css'
})
export class BorrowComponent {
  financingOptions = [
    {
      title: 'Business Overdraft',
      description: 'Flexible short-term working capital to manage cash flow gaps and unexpected expenses.',
      features: ['Pay interest only on funds used', 'Linked to your business account', 'No fixed repayment term'],
      minAmount: '$ 2,000',
      maxAmount: '$ 150,000',
      icon: 'icon-refresh'
    },
    {
      title: 'Vehicle & Asset Finance',
      description: 'Grow your business with specialized financing for equipment, vehicles, and specialized machinery.',
      features: ['Flexible terms up to 72 months', 'Competitive interest rates', 'Tailored structuring options'],
      minAmount: '$ 15,000',
      maxAmount: '$ 2,000,000',
      icon: 'icon-truck'
    },
    {
      title: 'Commercial Property Finance',
      description: 'Acquire, develop or refinance commercial properties with structured long-term funding.',
      features: ['Up to 10-year loan terms', 'Capital grace periods available', 'Expert property advisory'],
      minAmount: '$ 200,000',
      maxAmount: 'No Limit',
      icon: 'icon-office-building'
    }
  ];

  recentApplications = [
    { type: 'Business Overdraft Line', ref: 'APP-99201', submitDate: '20 Feb 2026', amount: '$ 25,000', status: 'Approved' },
    { type: 'Asset Finance (Fleet)', ref: 'APP-98443', submitDate: '15 Jan 2026', amount: '$ 185,000', status: 'Disbursed' }
  ];
}
