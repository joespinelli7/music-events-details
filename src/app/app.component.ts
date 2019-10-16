import { Component, OnInit } from '@angular/core';
import { MusicEvent } from './MusicEvent';
import { MusicEventService } from './music-event.service';
import { LoginService } from './login.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  musicevents: MusicEvent[];
  user: User;

  constructor(private musicEventService: MusicEventService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.musicevents = this.musicEventService.GetMusicEvents();
    this.loginService.GetUser().subscribe((user: User) => {
      this.user = user;
    });
  }

  logName(value: string) {
    console.log(value);
  }
}
