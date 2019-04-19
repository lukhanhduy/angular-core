import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private _translateService: TranslateService,
    private _authService: AuthService
  ) {
    this._translateService.use('vi');
    // this.fnRenderSideBar();
  }
  title = 'client';
  // fnRenderSideBar(){
  //   let modules = this._authService.getModules();
  //   let sidebarLeftMenu = [
  //     {label: 'Tabs', route: 'tabs', iconClasses: 'fa fa-th'}
  //   ];

  //   setTimeout(() => {
  //     this._layoutStore.setSidebarLeftMenu(sidebarLeftMenu);
  //   }, 500);
  //   console.log(modules);
  // }
}
