import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import { UsersService } from '../users/users.service';
import { of } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class RoleGuard implements CanActivate {

    constructor(
        private usersService: UsersService,
        private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return of(this.usersService.isAdminFunction())
        .pipe(map(isAdmin => {
            if (!isAdmin) {
                this.router.navigate(['/unauthorized']); return false;
            } else {
                return true;
            }
        }));
    }
}
