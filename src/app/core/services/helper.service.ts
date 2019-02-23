import {Injectable} from '@angular/core';
// import { SettingService } from './../../common/setting.service';
import {AppEnvService} from './environment.service';
import {AuthService} from './auth.service';
import {TranslationService} from './translation.service';
import {LocalStorageService} from './local-storage.service';
import _ from 'lodash';
import * as moment from 'moment';
import {LocalTime} from '../utils/local-time';

@Injectable({
    providedIn: 'root'
})
export class HelperService {
    private statusList: any = {};
    private fileSizes: any = {};
    private permission: any = {};

    constructor(
        private _envService: AppEnvService,
        private _authService: AuthService,
        private _language: TranslationService,
        private _localStorageService: LocalStorageService
    ) {
        this.statusList = this._language.getStatusList();
        this.permission = this._authService.getPermissions();
    }

    fnGetCurrentUser() {
        return this._authService.getCurrentUser();
    }

    fnGetPermisson() {
        return this.permission;
    }

    fnCheckPermission(module: any, permission: any) {
        if (this.permission[module]) {
            return this.permission[module].indexOf(permission) > -1 ? true : false;
        }
        return false;
    }
    fnShortContent(string: any, shortLength: any = 25) {
        if (string.length > shortLength) {
            string = `${string.substring(0, shortLength)}...`;
        }
        return string;

    }
    fnToSpace(string: any) {
        string = _.replace(string, '_', ' ');
        string = _.replace(string, '-', ' ');
        string = _.replace(string, /([A-Z]+)/g, ' ');
        return string;
    }

    
    // image  ----
    openLightBox(_lightbox: any, data: any, index: number): void {
        // open lightbox
        _lightbox.open(data, index);
    }

    closeLightBox(_lightbox: any): void {
        // close lightbox programmatically
        _lightbox.close();
    }

    formatDataLightBox(data) {
        data = data.map((file: any) => {
            return this.convertDataForLightBox(file.path, file.uniqueName);
        });
        return data;
    }

    convertDataForLightBox(path: any, uniqueName, thumbnail?: any) {
        return {
            src: path,
            caption: uniqueName || '',
            thumb: thumbnail || path
        };
    }

    // end image
    //array
    arrayToString(data: any, char: any) {
        return _.join(data, char);
    }

    converToDate(input: any) {
        return moment(input).format('YYYY-MM-DD HH:mm:ss');
    }

    /**
     * Format date
     */
    formatDate(date: any, fmt?: string) {
        const localTime = new LocalTime();

        if (fmt) {
            return localTime.parseDate(date, fmt);
        }

        return localTime.parseDate(date);
    }
}
