import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
/* Rxjs */
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/* SERVICES */
import { AuthService } from './../components/user/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  canActivate (
    activatedRoute: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean> {

    return this.auth.user$
      .map(user => {

        if (!user) {
          this.router.navigate(['/login']);
          return false;
        }
        console.log(user);
        return true;
      });
  }

}
