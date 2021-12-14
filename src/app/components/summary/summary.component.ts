import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initialPaymentsState, IPayment } from 'src/app/store/payments.store';

export interface Card {
  type: string;
  count: number;
}

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
  paymentsCount: number = initialPaymentsState.data.length;

  paymentsType: Card[] = this.getPaymentsTypes(initialPaymentsState.data);

  getPaymentsTypes(state: IPayment[]) {
    let types: any = {};
    let res = [];
    state.map((payment) => {
      if (payment.type in types) {
        types[payment.type] += 1;
      } else {
        types[payment.type] = 1;
      }
    });
    for (let key in types) {
      res.push({ type: key, count: types[key] });
    }
    return res;
  }
}
