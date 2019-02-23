import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PaginationComponent } from './../core/components/pagination/pagination.component';
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    imports: [
        CommonModule,
        TranslateModule.forChild(),
        NgbPaginationModule
    ],
    declarations: [ PaginationComponent ],
    exports: [
        TranslateModule, PaginationComponent
    ]
})
export class SharedModule {
}
