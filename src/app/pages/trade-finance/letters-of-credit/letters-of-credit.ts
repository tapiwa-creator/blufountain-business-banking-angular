import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-letters-of-credit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './letters-of-credit.html',
  styleUrl: './../../transact/pay/pay.css', // Reusing the identical layout CSS
})
export class LettersOfCredit implements OnInit {
  tabs = [
    'Apply for LC',
    'View Open LCs',
    'LC Amendments',
    'LC Utilisation'
  ];
  
  activeTab = 'Apply for LC';

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
