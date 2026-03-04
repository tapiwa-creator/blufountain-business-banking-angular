import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.html',
  styleUrl: './../pay/pay.css',
})
export class History implements OnInit {
  tabs = [
    'Transactions',
    'Proof of Payment',
    'Payment Notifications',
    'Prepaid History',
    'Inter-account Transfers'
  ];
  
  activeTab = 'Transactions';
  
  recentTransactions = [
    { date: '2023-11-20', desc: 'Payroll Run Nov', type: 'Credit', amount: '$-12,450.00', status: 'Completed', deposit: false },
    { date: '2023-11-19', desc: 'Office Supplies', type: 'Debit', amount: '$-840.50', status: 'Completed', deposit: false },
    { date: '2023-11-18', desc: 'Client Invoice #8842', type: 'Credit', amount: '$+5,200.00', status: 'Completed', deposit: true }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['tab'] && this.tabs.includes(params['tab'])) {
        this.activeTab = params['tab'];
      }
    });
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
