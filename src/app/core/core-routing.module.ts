import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '@core/dashboard/dashboard.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  { 
    path: "dashboard", 
    component: DashboardComponent
  },
  {
    path:"transaction",
    component:TransactionComponent
  },
  { 
    path: "**", 
    redirectTo: "dashboard" 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
