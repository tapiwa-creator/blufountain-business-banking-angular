import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary-card.component.html',
  styleUrl: './summary-card.component.css'
})
export class SummaryCardComponent {
  @Input() title: string = '';
  @Input() amount: string = '';
  @Input() subtitle: string = '';
  @Input() icon: string = '';
  @Input() statusColor: string = ''; // 'blue', 'green', 'purple', 'red'
}
