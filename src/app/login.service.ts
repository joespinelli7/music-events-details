import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // BehaviorSubject used to handle log in and out. Has state so it can set value of user to either be undefined
  // or have string values depending on whether or not user logs in.
  user: BehaviorSubject<User> = new BehaviorSubject(undefined);

  constructor(private router: Router) { }

  // used to ensure a user has typed in both a username and password and if so assigns the user subject state
  // to the username and password string typed in.
  Login(username: string, password: string) {
    if (username && password) {
      this.user.next(new User(username, password));
    }
  }

  // logs user out therefore setting state to undefeined and navigating back to login page.
  Logout() {
    this.user.next(undefined);
    this.router.navigate(['/login']);
  }

  // used to grab the current user and return their values.
  GetUser(): Observable<User> {
    return this.user;
  }
}
