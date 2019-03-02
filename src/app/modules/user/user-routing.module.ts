import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent, ListUserComponent, UpdateUserComponent} from './user.view';
const routes: Routes = [
  {
      path: '',
      children: [
          {
              path: '',
              component: ListUserComponent,
              outlet: 'container'
          },
          {
              path: ':userId',
              children: [
                  {
                      path: '',
                      component: UpdateUserComponent,
                      outlet: 'container'
                  },
              ]
          },
          {
              path: '/new',
              children: [
                  {
                      path: '',
                      component: AddUserComponent,
                      outlet: 'container'
                  },
              ]
          }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
