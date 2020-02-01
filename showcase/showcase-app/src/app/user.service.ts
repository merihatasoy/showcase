import { Injectable } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

const fb = new FormBuilder();

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userForm: FormGroup;
  usernamePattern = '^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$';
  emailPattern = '^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$';
  passwordPattern = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}';
  // Password critera: 1) At least 8 chars, 2) Lowercase letters, 3) Uppercase letters, 4) Numbers/Special chars.

  static get fb(): FormBuilder {
    return fb;
  }

  constructor() { 
    this.userForm = fb.group({
      credentials: fb.group({
        userName: [''],
        email: [''],
        password: [''],
      }),
    });
  }

  get userFormIsValid() {
    return (this.userForm.get('credentials.username').valid && this.userForm.get('credentials.email').valid && this.userForm.get('credentials.password').valid);
  }
  get userNameValidations() {
    return [Validators.required, Validators.pattern(this.usernamePattern)];
  }
  get emailValidations() {
    return [Validators.required, Validators.pattern(this.emailValidations)];
  }
  get passwordValidations() {
    return [Validators.required, Validators.pattern(this.passwordValidations)];
  }
}
