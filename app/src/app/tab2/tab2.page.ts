import { Component, OnInit } from '@angular/core';
import {TeamService} from '../services/team.service';
import {AngularFireList} from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  team : any;
  members : AngularFireList<any>;

  constructor(private ts : TeamService,) {

  }

 
  ngOnInit() {
    this.members = this.ts.getMembers();

    this.members.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.team = data;
    });
  }

  view(key : any) {
    console.log(key);
  }

  delete(key : any) {
    console.log(key);
  }


}

