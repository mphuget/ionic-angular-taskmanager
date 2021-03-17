import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

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
  constructor() { }
}
