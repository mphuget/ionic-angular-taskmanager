import { Component, OnInit } from '@angular/core';
import {TeamService} from '../services/team.service';
import {AngularFireList} from '@angular/fire/database';


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
    this.members.valueChanges().subscribe(members => {
      this.team = members;
      console.log(this.team);
      });
  }


}
