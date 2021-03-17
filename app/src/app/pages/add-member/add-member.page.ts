import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.page.html',
  styleUrls: ['./add-member.page.scss'],
})
export class AddMemberPage implements OnInit {

  private member : FormGroup;

  constructor(private fb: FormBuilder) { 

    this.member = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  
  }

  ngOnInit() {
  }

}
