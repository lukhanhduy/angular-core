import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LocalStorageService} from './local-storage.service';
import {HttpService} from './http.service';
import {map} from 'rxjs/operators';
import {LocalTime} from '../utils/local-time';


@Injectable({
    providedIn: 'root'
})

export class AuthService extends HttpService {

    constructor(http: HttpClient, private localStorageService: LocalStorageService) {
        super(http);
    }

    getToken(): string {
        const auth = this.localStorageService.getItem('AU-USER');

        if (auth) {
            return auth.id;
        }

        return null;
    }

    login(email: string, password: string) {
        const url = `${this.URL}/user/login`;

        return this.http.post(url, {email: email, password: password}).pipe(map((data: any) => {
            // login successful if there's a jwt token in the response
            if (data && data.data) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                this.localStorageService.setItem('AU-USER', data.data);
                this.localStorageService.setItem('USER', data.data.user);
                this.localStorageService.setItem('TOKEN', data.data.id);
                this.localStorageService.setItem('PERMISSION',data.data.permissions);
            }

            return data;
        }));
    }

    logout() {
        // remove user from local storage to log user out
        this.localStorageService.remove('AU-USER');
        this.localStorageService.remove('TOKEN');

        return null;
    }

    isAuthenticated(): boolean {
        const auth = this.localStorageService.getItem('AU-USER');
        const localTime = new LocalTime();

        if (auth) {
            const timeToLive = auth.ttl;
            return localTime.isSameOrAfter(localTime.addSeconds(timeToLive, auth.created), localTime.getDate());
        }

        return false;
    }

    getCurrentUser() {
        const auth = this.localStorageService.getItem('USER');

        if (auth) {
            return auth;
        }
        return {};
    }

    getPermissions() {
        const permission = this.localStorageService.getItem('PERMISSION');

        if (permission) {
            return permission;
        }
        return [];
    }
}
