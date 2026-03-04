import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forecasting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecasting.html',
  styleUrl: './../../transact/pay/pay.css', // Reusing the identical layout CSS
})
export class Forecasting implements OnInit {
  tabs = [
    'Cash Flow Forecast',
    'Scenario Planning',
    'Intraday Reports'
  ];
  
  activeTab = 'Cash Flow Forecast';

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
