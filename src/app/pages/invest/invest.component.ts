import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invest',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invest.component.html',
  styleUrl: './invest.component.css'
})
export class InvestComponent {
  investmentPortfolio = {
    totalValue: '12,450,000.00',
    dayChange: '+$ 42,500.00',
    dayChangePercent: '0.34%',
    portfolioYield: '8.2% p.a.'
  };

  activeInvestments = [
    { name: 'Corporate Call Account', type: 'Money Market', balance: '4,500,000.00', rate: '7.85%', maturity: 'On Demand', status: 'Active' },
    { name: 'Fixed Deposit (12 Mon)', type: 'Term Deposit', balance: '5,000,000.00', rate: '8.75%', maturity: '15 Oct 2026', status: 'Locked' },
    { name: 'Global Liquidity Fund', type: 'Unit Trust', balance: '2,950,000.00', rate: '7.50%', maturity: '24hrs Notice', status: 'Active' }
  ];

  opportunities = [
    { title: 'Notice Deposit 32-Day', rate: '8.25%', minAmount: '$ 25,000', risk: 'Low', icon: 'icon-lock' },
    { title: 'Treasury Bills (91-Day)', rate: '8.90%', minAmount: '$ 100,000', risk: 'Low', icon: 'icon-document' },
    { title: 'ESG Equity Fund', rate: '12.4% Target', minAmount: '$ 5,000', risk: 'Medium-High', icon: 'icon-leaf' }
  ];
}
