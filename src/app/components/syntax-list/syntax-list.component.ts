import { Component, OnInit } from '@angular/core';
import { CentralService } from '../../services/central.service';
import { AuthService } from '../../services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-syntax-list',
  templateUrl: './syntax-list.component.html',
  styleUrls: ['./syntax-list.component.css']
})
export class SyntaxListComponent implements OnInit {
  private userSyntaxes$: any = [];
  private avaliableLangs$;

  constructor(
    private service: CentralService,
    private auth: AuthService) { 
      
    }

    
  ngOnInit() {
    this.getUserSyntaxes();
    this.avaliableLangs$ =  this.service.getLanguages();
  }

  getUserSyntaxes() {
    // this.auth.user$.subscribe((e) => {
    //     this.service.getUserSyntaxes(e)
      

    // });
 
    this.auth.user$.subscribe((e) => {
      this.service.getUserSyntaxes(e)
        .snapshotChanges().map(changes => {
          return changes.map( item => {
            let language = {
              id : null,
              syntaxes : []
            };

            let currentSyntaxes = item.payload.val();
            
            for (var syntax in currentSyntaxes) {
              language.syntaxes = currentSyntaxes[syntax];
            }

            language.id = item.payload.key;
            this.userSyntaxes$.push(language);
          })
      });
    });
  }
}
