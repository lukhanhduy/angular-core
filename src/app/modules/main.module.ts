import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { FooterComponent } from './partials/footer/footer.component';
import { HeaderComponent } from './partials/header/header.component';
import { MasterComponent } from './partials/master/master.component';
import { SidebarComponent } from './partials/sidebar/sidebar.component';
import { templateConfig } from '../configs/admin.conf';
import { LayoutModule } from 'angular-admin-lte';
@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MasterComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    LayoutModule.forRoot(templateConfig),
  ],
})
export class MainModule { }
