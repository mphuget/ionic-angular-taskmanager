import { Component } from '@angular/core';

import {TeamService} from '../services/team.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  team : any;

  constructor(private ts : TeamService) {

    this.team = ts.data;
    console.log(this.team);
    
  }

}
