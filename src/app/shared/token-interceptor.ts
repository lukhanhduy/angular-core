import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable, Injector} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../core/services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = this.authService.getToken();
        const appToken = 'iiwGIFisnHLKZbQEUtAgx08CHaaYfIaDmgycZGWiw0bAz5L6VoAb9jG3YFN67uM6';
        const deviceId = '85b600edd1844a0387bf21b6b141aef4';
        let headers = {
            'deviceId': deviceId,
            'appToken': appToken,
            'Authorization': `Bearer ${token}`
        };

        request = request.clone({
            setHeaders: headers
        });

        return next.handle(request);
    }
}
