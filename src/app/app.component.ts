import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: User;

  constructor(private loginService: LoginService) { }

  // lifecycle method thats ran upon initialization of the app componenet and is used to grab the current
  // user if someone logged in.
  ngOnInit(): void {
    this.loginService.GetUser().subscribe((user: User) => {
      this.user = user;
    });
  }

  // calls on loginService and logs user out therefore setting user to undefined.
  Logout() {
    this.loginService.Logout();
  }
}
