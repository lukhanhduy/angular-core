import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {  NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from './../core/components/pagination/pagination.component';
import { LightboxModule } from 'ngx-lightbox';
import { Select2Module } from 'ng2-select2';
import { OwlDateTimeModule, OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
import { OwlMomentDateTimeModule } from 'ng-pick-datetime-moment';
import {MY_MOMENT_FORMATS} from '../configs/time.conf';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateComponent } from './../core/components/translate/translate.component';
@NgModule({
    imports: [
        CommonModule,
        LightboxModule,
        ReactiveFormsModule,
        FormsModule,
        Select2Module,
        OwlDateTimeModule,
        OwlMomentDateTimeModule,
        NgbPaginationModule
    ],
    declarations: [ 
        PaginationComponent,
        TranslateComponent
    ],
    exports: [
        PaginationComponent,
        TranslateComponent,
        LightboxModule,
        FormsModule,
        ReactiveFormsModule,
        Select2Module,
        OwlDateTimeModule,
        OwlMomentDateTimeModule,
        NgbPaginationModule,
        TranslateModule
    ],
    providers: [
        {provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_FORMATS}
    ]
})
export class SharedModule {
}
