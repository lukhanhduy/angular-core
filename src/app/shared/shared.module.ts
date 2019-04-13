import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './../core/components/pagination/pagination.component';
import { WindowRef } from './../core/components/windows/window-ref';
import { LightboxModule } from 'ngx-lightbox';
import { Select2Module } from 'ng2-select2';
import { OwlDateTimeModule, OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
import { OwlMomentDateTimeModule } from 'ng-pick-datetime-moment';
import {MY_MOMENT_FORMATS} from '../configs/time.conf';

@NgModule({
    imports: [
        CommonModule,
        PaginationComponent,
        LightboxModule,
        Select2Module,
        OwlDateTimeModule,
        OwlMomentDateTimeModule,
        WindowRef
    ],
    declarations: [ 

    
    ],
    exports: [
        PaginationComponent,
        LightboxModule,
        FormsModule,
        Select2Module,
        OwlDateTimeModule,
        OwlMomentDateTimeModule
    ],
    providers: [WindowRef,{provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_FORMATS}]
})
export class SharedModule {
}
