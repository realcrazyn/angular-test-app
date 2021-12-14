import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';

const routes: Routes = [
  { path: 'navigator/tab/:id', component: ListComponent },
  { path: 'transactions', component: TransactionsListComponent },
  { path: '', component: SummaryComponent },
  { path: '**', component: SummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
