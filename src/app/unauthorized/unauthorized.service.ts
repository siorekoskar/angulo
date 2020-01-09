import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users/users.service';

@Injectable({
  providedIn: 'root'
})
export class UnauthorizedService {

  constructor(
    private usersService: UsersService,
    private router: Router) {
      this.usersService.checkIsAdmin();
     }

  isUnauthorized() {
    if (!this.usersService.isAdmin) {
      this.router.navigate(['/unauthorized']);
    }
  }
}
