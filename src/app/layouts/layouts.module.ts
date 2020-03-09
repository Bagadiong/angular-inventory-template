import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';

import { ParentComponent } from './parent/parent.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    ParentComponent, 
    SidebarComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
  ]
})
export class LayoutsModule { }
