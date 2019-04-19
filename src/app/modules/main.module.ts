import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MasterComponent } from './partials/master/master.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { SidebarComponent } from './partials/sidebar/sidebar.component';
import { LayoutModule } from 'angular-admin-lte';
import { templateConfig } from '../configs/admin.conf';

@NgModule({
  declarations: [
    MasterComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    LayoutModule.forRoot(templateConfig)
  ],
})
export class MainModule { }
