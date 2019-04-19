import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { HttpService } from './http.service';
import { map } from 'rxjs/operators';
import { LocalTime } from '../utils/local-time';
import { API } from './../../configs/api.conf';
import * as _ from 'lodash';
@Injectable({
    providedIn: 'root'
})

export class AuthService extends HttpService {

    constructor(http: HttpClient, private localStorageService: LocalStorageService) {
        super(http);
    }

    getToken(): string {
        return this.localStorageService.getItem('TOKEN') || null;
    }

    fnLogin(user: any) {
        const {
            email = '', password = ''
        } = user;
        return new Promise((resolve: any, reject: any) => {
            this.post(API.ADMIN.login, { email, password }).subscribe((res: any) => {
                this.localStorageService.setItem('USER', _.get(res, 'data.user', {}));
                this.localStorageService.setItem('TOKEN', _.get(res, 'data.accessToken', ''));
                this.localStorageService.setItem('PERMISSION', _.get(res, 'data.permissions.rules', []));
                this.localStorageService.setItem('ROLE', _.get(res, 'data.role', []));
                this.localStorageService.setItem('IS_LOGIN', true);
                this.localStorageService.setItem("MODULES",_.get(res, 'data.modules', []))
                resolve({ code: res.code });
            }, (err: any) => {
                reject({ code: err.code, isError: true, message: err.message });
            })
        });
    }

    logout() {
        // remove user from local storage to log user out
        this.localStorageService.remove('AU-USER');
        this.localStorageService.remove('TOKEN');

        return null;
    }

    isAuthenticated(): boolean {
        return this.localStorageService.getItem('IS_LOGIN') || false;
    }

    getCurrentUser() {
        const auth = this.localStorageService.getItem('USER');

        if (auth) {
            return auth;
        }
        return {};
    }

    getPermissions() {
        const permission = this.localStorageService.getItem('PERMISSIONS');
        if (permission) {
            return permission;
        }
        return [];
    }

    getModules() {
        const modules =  this.localStorageService.getItem('MODULES');
        if(modules){
            return modules;
        }
        return [];
    }
}
