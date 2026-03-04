import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guarantees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guarantees.html',
  styleUrl: './../../transact/pay/pay.css', // Reusing the identical layout CSS
})
export class Guarantees implements OnInit {
  tabs = [
    'Issue Guarantee',
    'Active Guarantees',
    'Guarantee Extensions'
  ];
  
  activeTab = 'Issue Guarantee';

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
