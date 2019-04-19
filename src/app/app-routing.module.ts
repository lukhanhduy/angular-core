import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingPreloader } from './core/services/routing.service';
import { AuthComponent } from './core/auth/main/auth.component';
import { AuthGuardService } from './core/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/main.module#MainModule',
    canActivate: [AuthGuardService]
  },
  {
      path: 'auth',
      component: AuthComponent,
      loadChildren: './core/auth/auth.module#AuthModule',
  },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: AppRoutingPreloader,
    enableTracing: false,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule],
  providers: [AppRoutingPreloader]
})
export class AppRoutingModule { }
