import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liquidity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liquidity.html',
  styleUrl: './../../transact/pay/pay.css', // Reusing the identical layout CSS
})
export class Liquidity implements OnInit {
  tabs = [
    'Notional Pooling',
    'Cash Concentration',
    'Zero Balancing',
    'Sweeping'
  ];
  
  activeTab = 'Notional Pooling';

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
