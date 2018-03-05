import { Component, OnInit } from '@angular/core';
/** * SERVICES */
import { AuthService } from '../../services/auth.service';
/** * RXJS */
import { Observable } from 'rxjs/Observable';

/** COMPONENTS */
import { LoaderDonutComponent } from '../loaders/loader-donut/loader-donut.component';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.css']
})
export class UserAreaComponent implements OnInit {
  
  constructor(public auth: AuthService) {
    // this.user$ = this.auth.authState;
  }

  ngOnInit() {
  }

  login_with_google(): void {
    this.auth.login_with_google();
  }
  logout(): void {
    this.auth.logout();
  }
}
