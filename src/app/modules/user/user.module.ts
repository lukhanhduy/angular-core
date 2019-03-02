import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListUserComponent } from './views/list-user/list-user.component';
import { AddUserComponent } from './views/add-user/add-user.component';
import { UpdateUserComponent } from './views/update-user/update-user.component';

@NgModule({
  declarations: [ListUserComponent, AddUserComponent, UpdateUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
