import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reporting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reporting.html',
  styleUrl: './../../transact/pay/pay.css', // Reusing the identical layout CSS
})
export class Reporting implements OnInit {
  tabs = [
    'Bank Statements',
    'MT940 / BAI2 Export',
    'Reconciliation',
    'Custom Reports'
  ];
  
  activeTab = 'Bank Statements';

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
