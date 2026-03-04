import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-reports.html',
  styleUrl: './../../transact/pay/pay.css', // Reusing the established layout CSS
})
export class TransactionReports implements OnInit {
  tabs = [
    'Transaction History',
    'Debit Order Report',
    'Payments Report',
    'Inter-account Report'
  ];
  
  activeTab = 'Transaction History';

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
