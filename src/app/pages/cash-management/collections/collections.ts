import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collections.html',
  styleUrl: './../../transact/pay/pay.css', // Reusing the identical layout CSS
})
export class Collections implements OnInit {
  tabs = [
    'DebiCheck',
    'Recurring Debits',
    'Payment Collection',
    'Naedo'
  ];
  
  activeTab = 'DebiCheck';

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
