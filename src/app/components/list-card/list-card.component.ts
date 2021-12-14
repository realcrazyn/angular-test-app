import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initialPaymentsState, IPayment } from 'src/app/store/payments.store';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
})
export class ListCardComponent implements OnInit {
  @Input() itsType: string;

  getPayments(state: IPayment[]) {
    let dict: any = {};
    const res = state.filter((payment) => payment.type === this.itsType);
    res.map((payment) => {
      if (payment.email in dict) {
        dict[payment.email] = {
          ...dict[payment.email],
          count: dict[payment.email].count + 1,
          amount: +(dict[payment.email].amount + payment.amount).toFixed(2),
        };
      } else {
        dict[payment.email] = {
          ...payment,
          count: 1,
        };
      }
    });
    const result = [];
    for (let card in dict) {
      result.push(dict[card]);
    }

    return result;
  }

  payments: any;

  ngOnInit(): void {
    this.payments = this.getPayments(initialPaymentsState.data);
  }
}
