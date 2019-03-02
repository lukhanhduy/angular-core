import {environment} from '../../../environments/environment';
import {throwError, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import _ from 'lodash';

export abstract class HttpService {
    protected URL = `${environment.apiUrl}/${environment.apiPath}/${environment.apiVersion}`;

    constructor(protected http: HttpClient) {
    }

    /**
     * Handle error
     *
     * @param {any} error
     *
     * @return {void}
     */
    protected handleError(res: any) {
        return throwError(res.error.error || res.error);
    }

    /**
     * extract Data
     *
     * @param {any} res
     *
     * @return {void}
     */

    protected extractData(res: any) {
        // let body = res.json();
        return res || {};
    }

    /**
     * extend post http
     * @param url
     * @param data
     * @return {void}
     */
    post(url: any, data: any) {
        url = this.formatUrl(url);
        return this.http.post(url, data).pipe(map(res => {
                return this.extractData(res);
            }),
            catchError(err => {
                return this.handleError(err);
            }));
    }

    /**
     * extend get http
     * @param url
     * @param data
     * @return {void}
     */

    get(url, data: any = {}): Observable<any> {
        url = this.formatUrl(url);
        return this.http.get(url, {
            params: {...data}
        }).pipe(map(res => {
                return this.extractData(res);
            }),
            catchError((err: any) => {
                return this.handleError(err);
            }));
    }

    formatUrl(url, type?) {
        if (_.isUndefined(type)) {
            return `${this.URL}/${url}`;
        }
        return `${this[type]}/${url}`;
    }
}
