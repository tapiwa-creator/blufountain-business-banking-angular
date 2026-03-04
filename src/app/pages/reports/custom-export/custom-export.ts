import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-custom-export',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-export.html',
  styleUrl: './../../transact/pay/pay.css', // Reusing the established layout CSS
})
export class CustomExport implements OnInit {
  tabs = [
    'Custom Report Builder',
    'Schedule Reports',
    'Export to Excel / PDF',
    'API Data Feed'
  ];
  
  activeTab = 'Custom Report Builder';

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
