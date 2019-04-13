import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../core/services/auth-guard.service';
import { MasterComponent } from './partials/master/master.component';
const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      {
          path: 'users',
          // canActivate: [AuthGuardService],
          loadChildren: './users/users.module#UsersModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
