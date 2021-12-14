import { Component, Input, OnInit } from '@angular/core';
import { ucFirst } from 'src/app/HOC/hoc';
import { Card } from '../summary/summary.component';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.scss'],
})
export class SummaryCardComponent implements OnInit {
  @Input() card: Card;
  @Input() index: number;

  ucFirst = ucFirst;
  count: number;
  type: string;

  ngOnInit(): void {}
}
