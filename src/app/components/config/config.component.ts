import { Component, OnInit, Input } from '@angular/core';
import { CentralService } from '../../services/central.service';
import { LanguageComponent } from '../language/language.component';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  constructor(private service: CentralService) { 

  }

  ngOnInit() {
  }

}
