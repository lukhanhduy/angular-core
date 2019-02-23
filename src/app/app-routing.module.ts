import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppRoutingPreloader} from './core/services/routing.service';

const routes: Routes = [
  {
      path: '',
      loadChildren: './modules/modules.module#ModulesModule',
  },
  {
      path: '',
      loadChildren: './modules/auth/auth.module#AuthModule',
  },
  {path: '**', redirectTo: '404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: AppRoutingPreloader, enableTracing: false})],
  exports: [RouterModule],
  providers: [AppRoutingPreloader]
})
export class AppRoutingModule { }
