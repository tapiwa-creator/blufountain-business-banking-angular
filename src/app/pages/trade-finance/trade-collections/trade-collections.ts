import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trade-collections',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trade-collections.html',
  styleUrl: './../../transact/pay/pay.css', // Reusing the identical layout CSS
})
export class TradeCollections implements OnInit {
  tabs = [
    'Documentary Collections',
    'Import Collections',
    'Export Collections'
  ];
  
  activeTab = 'Documentary Collections';

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
