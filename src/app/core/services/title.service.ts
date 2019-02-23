import {Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class TitleService {
    private title: any = 'HELLO XOM';

    constructor(
        private _title: Title,
    ) {
    }

    setTitle(keyword?: any) {
        if (!keyword) {
            this._title.setTitle(this.title);
        } else {
            this._title.setTitle(`${this.title} -  ${keyword}`);
        }
        return true;
    }
}
