/** MODULES */
import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate } from '@angular/router';

/** SERVICES */
import { AuthService } from './auth.service';

/** RXJS */
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operator/map';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService) { }

  canActivate (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    return this.auth.user$.map(user => {
      if(user) { return true; }
      
      this.router.navigate(['/login'],{ queryParams: { returnUrl: state.url} });
      return false;
    });
  }
}
