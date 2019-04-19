import { Component, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { AuthService } from 'src/app/core/services/auth.service';
import { LayoutStore } from 'angular-admin-lte';
import { SharedService } from './../../../core/services/shared.service';
@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {
  constructor(
    private _authService: AuthService,
    private _layoutStore: LayoutStore,
    private _sharedService: SharedService
  ) { 

    // this._sharedService.missionAnnounced$.subscribe((data:any)=>{
    //   if(data.eventName == 'login'){
    //     console.log(data.eventName);
    //     this.fnRenderSideBar();
    //   }
    // })

  }

  ngAfterViewInit(): void {
    this.fnRenderSideBar();
  }
  ngOnInit() {
    this.fnRenderSideBar();
  }
  fnRenderSideBar() {
    let modules = this._authService.getModules();
    let sidebarLeftMenu = [
      // { label: 'Tabs', route: 'tabs', iconClasses: 'fa fa-th' }
    ];
    for (let i = 0; i < modules.length; i++) {
      sidebarLeftMenu.push(
        { label: _.startCase(_.toLower(modules[i].module_name)), route: modules[i].slug, iconClasses: modules[i].icon }
      )
    }

    setTimeout(() => {
      this._layoutStore.setSidebarLeftMenu(sidebarLeftMenu);
    }, 500);
  }
}
