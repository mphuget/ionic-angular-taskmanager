import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  member : any;
  members:  AngularFireList<any> = null;

  data : any = [
    {
      firstName : "John",
      lastName : "Doe",
    },
    {
      firstName: "Jane",
      lastName: "Doe"
    }
  ];
  constructor(private db : AngularFireDatabase) { 
  
  }

  addMember(firstName, lastName) {
    
    this.member = this.db.list('members');
    this.member.push({
      firstName : firstName,
      lastName : lastName
    });

  }

  getMembers() : AngularFireList<any> {

    this.members = this.db.list('members');
    return this.members;
  }
}
