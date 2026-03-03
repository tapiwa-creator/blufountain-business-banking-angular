import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sub-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sub-nav.component.html',
  styleUrl: './sub-nav.component.css'
})
export class SubNavComponent {
  activeDropdown: string | null = null;

  toggleDropdown(name: string) {
    this.activeDropdown = this.activeDropdown === name ? null : name;
  }

  closeDropdown() {
    this.activeDropdown = null;
  }

  transactMenu = [
    {
      title: 'Pay',
      icon: '💰',
      items: [
        'Pay Beneficiary',
        'Once-off Payment',
        'Multiple Beneficiaries',
        'Scheduled Payments',
        'International Payment',
        'EFT Payments',
        'Batch Payments',
        'Traffic Fines',
        'My Bills'
      ]
    },
    {
      title: 'Transfer',
      icon: '↔',
      items: [
        'Between Own Accounts',
        'Inter-Entity Transfer',
        'Cross-Border Transfer',
        'SWIFT / SEPA'
      ]
    },
    {
      title: 'Manage',
      icon: '⚙',
      items: [
        'Beneficiaries',
        'Beneficiary Groups',
        'Debit Orders',
        'Card & Limits',
        'Overdraft Limit',
        'Email Transactions',
        'Instant Money Vouchers',
        'Scheduled Prepaid'
      ]
    },
    {
      title: 'History',
      icon: '🕐',
      items: [
        'Transactions',
        'Proof of Payment',
        'Payment Notifications',
        'Prepaid History',
        'Inter-account Transfers'
      ]
    },
    {
      title: 'Documents',
      icon: '📄',
      items: [
        'Statements',
        'Tax Certificates',
        'Confirmation Letter',
        'Audit Trail',
        'Business Reports'
      ]
    }
  ];

  cashManagementMenu = [
    {
      title: 'Collections',
      items: ['DebiCheck', 'Recurring Debits', 'Payment Collection', 'Naedo']
    },
    {
      title: 'Liquidity',
      items: ['Notional Pooling', 'Cash Concentration', 'Zero Balancing', 'Sweeping']
    },
    {
      title: 'Forecasting',
      items: ['Cash Flow Forecast', 'Scenario Planning', 'Intraday Reports']
    },
    {
      title: 'Reporting',
      items: ['Bank Statements', 'MT940 / BAI2 Export', 'Reconciliation', 'Custom Reports']
    }
  ];

  tradeFinanceMenu = [
    {
      title: 'Letters of Credit',
      items: ['Apply for LC', 'View Open LCs', 'LC Amendments', 'LC Utilisation']
    },
    {
      title: 'Guarantees',
      items: ['Issue Guarantee', 'Active Guarantees', 'Guarantee Extensions']
    },
    {
      title: 'Collections',
      items: ['Documentary Collections', 'Import Collections', 'Export Collections']
    },
    {
      title: 'Documents',
      items: ['Bill of Lading', 'Commercial Invoice', 'Certificate of Origin', 'Shipping Documents']
    }
  ];

  reportsMenu = [
    {
      title: 'Financial Reports',
      items: ['Income & Expense Summary', 'Cash Flow Statement', 'Balance Sheet Overview', 'Aged Payables Report', 'Aged Receivables Report']
    },
    {
      title: 'Transaction Reports',
      items: ['Transaction History', 'Debit Order Report', 'Payments Report', 'Inter-account Report']
    },
    {
      title: 'Custom & Export',
      items: ['Custom Report Builder', 'Schedule Reports', 'Export to Excel / PDF', 'API Data Feed']
    }
  ];
}
