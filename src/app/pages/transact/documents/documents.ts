import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './documents.html',
  styleUrl: './../pay/pay.css',
})
export class Documents implements OnInit {
  tabs = [
    'Statements',
    'Tax Certificates',
    'Confirmation Letter',
    'Audit Trail',
    'Business Reports'
  ];
  
  activeTab = 'Statements';

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
