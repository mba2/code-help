import { Component, OnInit } from '@angular/core';
/**  SERVICES  */
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) {}

  ngOnInit() {
  }

}
