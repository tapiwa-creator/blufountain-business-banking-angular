import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fx-forex',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fx-forex.component.html',
  styleUrl: './fx-forex.component.css'
})
export class FxForexComponent {
  exchangeRates = [
    { pair: 'USD / ZAR', rate: '18.4520', change: '+0.12%', trend: 'up' },
    { pair: 'GBP / USD', rate: '1.2640', change: '-0.05%', trend: 'down' },
    { pair: 'EUR / USD', rate: '1.0825', change: '+0.08%', trend: 'up' },
    { pair: 'USD / BWP', rate: '13.7500', change: '0.00%', trend: 'flat' }
  ];

  recentDeals = [
    { ref: 'FX-88402', date: '25 Feb, 09:14', pair: 'USD/ZAR', action: 'Buy USD', amount: '$ 45,000.00', rate: '18.4450', status: 'Settled' },
    { ref: 'FX-88390', date: '24 Feb, 14:30', pair: 'EUR/USD', action: 'Sell EUR', amount: '€ 12,500.00', rate: '1.0815', status: 'Settled' },
    { ref: 'FX-88215', date: '22 Feb, 11:05', pair: 'GBP/USD', action: 'Buy GBP', amount: '£ 8,000.00', rate: '1.2610', status: 'Settled' }
  ];
}
