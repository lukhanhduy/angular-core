import { Component, Input, Output, SimpleChanges, EventEmitter, OnChanges } from '@angular/core';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnChanges {


  @Input() page: any = 1;
  @Input() records: any = 0;
  @Input() recordsOnPage: any = 10;
  @Input() recordsOnPageOptions: any[] = [5, 10, 20, 50, 100];
  @Input() isLoading = false;
  @Output() pagination = new EventEmitter<any>();

  lastPage: any = 1;
  pageDisplayInfo: any = {};
  pageStart: any = 0;
  pageEnd: any = 0;
  totalPage: any = 0;
  items:any = [];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.changePageDisplayInfo();
  }

  changePage(page) {
    if (page >= 1 && page <= this.lastPage) {
      this.page = page;
      this.emitData();
    }
  }

  changeRecordsOnPage(number) {
    if (number >= 0) {
      this.recordsOnPage = number;
      this.emitData();
    }
  }

  emitData() {
    var pagination = { page: this.page, recordsOnPage: this.recordsOnPage };
    this.pagination.emit(pagination);
  }

  changePageDisplayInfo() {
    this.pageDisplayInfo.from = this.records > 0 ? (this.page - 1) * this.recordsOnPage + 1 : 0;
    this.pageDisplayInfo.to = (this.page * this.recordsOnPage) >= this.records ? this.records : (this.page * this.recordsOnPage);
    // console.log(this.page)
    this.pageDisplayInfo.records = this.records;
    this.lastPage = this.records > 0 ? Math.ceil(this.records / this.recordsOnPage) : 1;
    if (this.records > 0) {
      this.totalPage = Math.ceil(this.records / this.recordsOnPage);
      if(this.totalPage <= 10){
        this.pageStart = 1;
        this.pageEnd = this.totalPage;
      }
      else{
        if(this.page  == 1){
          this.pageStart = 1;
          this.pageEnd = 10;
        }
        else{
          let space:any = this.totalPage - this.page;
          if( space < 8  ){
            this.pageStart = this.totalPage - 9;
            this.pageEnd = this.totalPage;
          }
          else{
            this.pageStart = this.page - 1;
            this.pageEnd = this.page + 8 ;
          }
        }
      }
      this.createRange();
    }
  }
  createRange() {
    this.items = [];
    for (var i = this.pageStart; i <= this.pageEnd; i++) {
      this.items.push(i);
    }
    return this.items;
  }

}
