import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentComponent } from '@layouts/parent/parent.component'
import { LoginComponent } from '@app/login/login.component'

import { AuthGuard } from '@shared/services/guards/auth-guard.service';

const routes: Routes = [
  {
    path: "login", 
    component: LoginComponent,
  },
  { 
    path: "", 
    component: ParentComponent,
    children: [{
      path: "",
      loadChildren:  () => import('@layouts/layouts.module').then(m => m.LayoutsModule)
    }],
    canActivate: [AuthGuard]
  },
  { 
    path: "**", 
    redirectTo: "" 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
