import { Component, OnInit } from '@angular/core';
/**  SERVICES  */
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService) {}

  ngOnInit() {
  }

  login_with_google(): void {
    this.auth.login_with_google();
  }
}
