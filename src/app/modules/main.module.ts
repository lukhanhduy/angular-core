import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MasterComponent } from './partials/master/master.component';
import { HeaderComponent } from './partials/header/header.component';
import { SidebarComponent } from './partials/sidebar/sidebar.component';

@NgModule({
  declarations: [MasterComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
