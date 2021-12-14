import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryCardComponent } from './components/summary-card/summary-card.component';
import { ListComponent } from './components/list/list.component';
import { ListCardComponent } from './components/list-card/list-card.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryCardComponent,
    ListComponent,
    ListCardComponent,
    SummaryComponent,
    TransactionsListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
