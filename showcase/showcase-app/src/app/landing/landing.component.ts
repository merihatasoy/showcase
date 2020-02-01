import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  formGroup: FormGroup;


  constructor(private userService: UserService) { 
    this.formGroup = this.userService.userForm as FormGroup;
  }

  ngOnInit() {
  }

  get userOnSignUpStep() {
    return false;
  }

  get userCredentialsFormGroup(): FormGroup {
    return this.formGroup.get('credentials') as FormGroup;
  }

}
