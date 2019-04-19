import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({providedIn: 'root'})

export class AuthGuardService implements CanActivate {
    constructor(private router: Router, private authService: AuthService) {
    }

    /**
     * Guarding router
     *
     * @param {any} route
     * @param {any} state
     *
     * @return {any}
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isAuthenticated() === true) {
            return true;
        }
        this.router.navigateByUrl('/auth/login');

        return false;
    }

    /**
     * Guarding child routes
     *
     * @param {any} route
     * @param {any} state
     *
     * @return {any}
     */
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }
}
