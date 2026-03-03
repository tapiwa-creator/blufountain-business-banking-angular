import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quick-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quick-actions.component.html',
  styleUrl: './quick-actions.component.css'
})
export class QuickActionsComponent {
  actions = [
    { name: 'Pay Beneficiary', icon: 'icon-user', color: 'orange' },
    { name: 'Bulk / EFT', icon: 'icon-send', color: 'green' },
    { name: 'Scheduled Pay', icon: 'icon-calendar', color: 'teal' },
    { name: 'International', icon: 'icon-globe-alt', color: 'blue' },
    { name: 'Statements', icon: 'icon-document', color: 'red' },
    { name: 'Transactions', icon: 'icon-switch-horizontal', color: 'purple' },
    { name: 'Proof of Pay', icon: 'icon-check-circle', color: 'yellow' },
    { name: 'Reports', icon: 'icon-chart-bar', color: 'green-alt' }
  ];
}
