import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {
  @Input() key = "";
  @Input() replaces = {};
  public translate:any = "";
  constructor(
    private _translate: TranslateService
  ) { 
    this._translate.use('en');
  }

  ngOnInit() {
    this.fnTranslate();
  }
  async fnTranslate() {
    await Promise.all(
      Object.keys(this.replaces).map(async (key: any) => {
        let string:any = await this.fnGetTranslate(this.replaces[key]);
        this.replaces[key] = string || '';
      })
    )
    this._translate.get(this.key, this.replaces ).subscribe((res: string) => {
        this.translate = res;
        //=> 'hello world'
    });
  }
  fnGetTranslate(field) {
    return new Promise((resolve: any) => {
      this._translate.get(field).subscribe((res: any) => {
        return resolve(res);
      },(err:any)=>{
        return resolve('');
      });
    })

  }
}
