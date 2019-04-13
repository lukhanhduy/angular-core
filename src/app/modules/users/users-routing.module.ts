import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './views/users-list/users-list.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: UsersListComponent,
        outlet: 'container'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
