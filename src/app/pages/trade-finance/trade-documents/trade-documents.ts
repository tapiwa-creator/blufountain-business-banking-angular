import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trade-documents',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trade-documents.html',
  styleUrl: './../../transact/pay/pay.css', // Reusing the identical layout CSS
})
export class TradeDocuments implements OnInit {
  tabs = [
    'Bill of Lading',
    'Commercial Invoice',
    'Certificate of Origin',
    'Shipping Documents'
  ];
  
  activeTab = 'Bill of Lading';

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
