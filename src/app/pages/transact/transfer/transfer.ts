import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transfer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transfer.html',
  styleUrl: './../pay/pay.css', // Reusing the identical layout CSS from PayComponent for consistency
})
export class Transfer implements OnInit {
  tabs = [
    'Between Own Accounts',
    'Inter-Entity Transfer',
    'Cross-Border Transfer',
    'SWIFT / SEPA'
  ];
  
  activeTab = 'Between Own Accounts';
  
  accounts = [
    { name: 'Business Current', number: '4062-874-10-3', balance: '$ 184,250.00' },
    { name: 'Business Savings', number: '4062-874-10-4', balance: '$ 75,800.00' },
    { name: 'Forex USD Account', number: '4062-874-10-5', balance: '$ 12,400.00' }
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

