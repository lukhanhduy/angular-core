import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

declare var $: any;


function _window(): any {
    // Return the global native browser window object
    return window;
}

function _document(): any {
    return document;
}

function _getElement(key): any {
    return $(key);
}

@Injectable()
export class WindowRef {
    constructor(private toastr: ToastrService) {
    }

    get nativeWindow(): any {
        return _window();
    }

    get documentWindow(): any {
        return _document();
    }

    getElement(key: any) {
        return _getElement(key);
    }

    showMessageBox(message: any, type: any, position) {
        this.toastr[type](message, 'Helloxom', {
            positionClass: `toast-${position}`,
            timeOut: 2000
        });
    }
}
