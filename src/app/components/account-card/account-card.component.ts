import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-card.component.html',
  styleUrl: './account-card.component.css'
})
export class AccountCardComponent {
  @Input() accountType: string = '';
  @Input() accountName: string = '';
  @Input() accountNumber: string = '';
  @Input() balance: string = '';
  @Input() currency: string = 'R';
  @Input() tag: string = '';
  @Input() variant: 'blue' | 'green' | 'purple' = 'blue';
}
