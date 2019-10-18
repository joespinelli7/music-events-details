import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // handles all the login and talks to the login service to ensure the username and password is passed in.
  username: string;
  password: string;
  
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  Login() {
    this.loginService.Login(this.username, this.password);
    this.username = '';
    this.password = '';
    this.router.navigate(['/home']);
  }

  Cancel() {
    this.username = '';
    this.password = '';
    this.router.navigate(['/home']);
  }

}
