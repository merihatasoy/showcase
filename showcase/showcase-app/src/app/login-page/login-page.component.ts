import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form;
  isOnSignUp = false;
  displayUsername = false;

  constructor(private userService: UserService) { 
    this.form = this.userService.userForm.get('credentials') as FormGroup;
  }

  ngOnInit() {
  }

  submit() {
    // if (this.userService.userFormIsValid) {
    //   if (this.isOnSignUp) {
    //     return this.userService.callSignUp();
    //   }
    //   this.userService.callLogin();
    // } else {
    //   console.log(this.form)
    // }
    this.showUsername(true);
  }

  showUsername(bool: boolean) {
    this.displayUsername = bool;
  }

  get username() {
    return this.form.get('userName').value;
  }

}
