import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ucFirst } from 'src/app/HOC/hoc';
import { initialPaymentsState } from 'src/app/store/payments.store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  tabId: string;
  ucFirst = ucFirst;
  getTabs = () => {
    let res: string[] = [];
    initialPaymentsState.data.map((payment) =>
      res.includes(payment.type) ? null : res.push(payment.type)
    );
    res ? (this.tabId = res[0]) : null;
    return res;
  };

  types: string[] = this.getTabs();

  tabchange(tab: string) {
    this.tabId = tab;
  }

  public href: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.href = this.router.url.toString().slice(-1);
    if (this.href === '0') {
      this.tabchange(this.types[0]);
    } else if (this.href === '1') {
      this.tabchange(this.types[1]);
    } else if (this.href === '2') {
      this.tabchange(this.types[2]);
    } else if (this.href === '3') {
      this.tabchange(this.types[3]);
    }
  }
}
