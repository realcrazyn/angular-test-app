import { Component } from '@angular/core';
import { initialPaymentsState, IPayment } from 'src/app/store/payments.store';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss'],
})
export class TransactionsListComponent {
  transactions: IPayment[] = initialPaymentsState.data;
}
