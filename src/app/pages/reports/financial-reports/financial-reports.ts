import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-financial-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './financial-reports.html',
  styleUrl: './../../transact/pay/pay.css', // Reusing the established layout CSS
})
export class FinancialReports implements OnInit {
  tabs = [
    'Income & Expense Summary',
    'Cash Flow Statement',
    'Balance Sheet Overview',
    'Aged Payables Report',
    'Aged Receivables Report'
  ];
  
  activeTab = 'Income & Expense Summary';

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
