import { Component, OnInit } from '@angular/core';
/** * SERVICES */
import { AuthService } from '../../services/auth.service';
/** * RXJS */
import { Observable } from 'rxjs/Observable';

/** MODULE */
import { Router } from '@angular/router';
/** COMPONENTS */
import { LoaderDonutComponent } from '../loaders/loader-donut/loader-donut.component';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.css']
})
export class UserAreaComponent implements OnInit {
  
  constructor(
    public auth: AuthService) {}

  ngOnInit() {
  }
}
