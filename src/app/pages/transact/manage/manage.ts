import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage.html',
  styleUrl: './../pay/pay.css',
})
export class Manage implements OnInit {
  tabs = [
    'Beneficiaries',
    'Beneficiary Groups',
    'Debit Orders',
    'Card & Limits',
    'Overdraft Limit',
    'Email Transactions',
    'Instant Money Vouchers',
    'Scheduled Prepaid'
  ];
  
  activeTab = 'Beneficiaries';

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
