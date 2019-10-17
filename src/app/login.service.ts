import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: BehaviorSubject<User> = new BehaviorSubject(undefined);

  constructor(private router: Router) { }

  Login(username: string, password: string) {
    if (username && password) {
      this.user.next(new User(username, password));
    }
  }

  Logout() {
    this.user.next(undefined);
    this.router.navigate(['/login']);
  }

  GetUser(): Observable<User> {
    return this.user;
  }
}
