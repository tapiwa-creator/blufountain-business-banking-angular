import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pay.html',
  styleUrl: './pay.css',
})
export class Pay implements OnInit {
  tabs = [
    'Pay Beneficiary',
    'Once-off Payment',
    'Multiple Beneficiaries',
    'Scheduled Payments',
    'International Payment',
    'EFT Payments',
    'Batch Payments',
    'Traffic Fines',
    'My Bills'
  ];
  
  activeTab = 'Pay Beneficiary';

  savedBeneficiaries = [
    { name: 'City Power', account: '445210998' },
    { name: 'Telkom SA', account: '882001144' },
    { name: 'SARS eFiling', account: '000010023' },
    { name: 'Vodacom Business', account: '994411122' }
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
