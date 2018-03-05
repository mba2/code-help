import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operator/map';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService {

  constructor(private router: Router) { }

  canActivate(): boolean {
    // if(user === true) {
    //   return true;
    // }
    this.router.navigate(['/login']);
    return false;
  }
}
