import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  @Input() userCredentialsFormGroup;

  constructor() { }

  ngOnInit() {
  }

  submit() {
    console.log(this.userCredentialsFormGroup);
  }

}
