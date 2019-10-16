import { Component, OnInit } from '@angular/core';
import { MusicEvent } from './MusicEvent';
import { MusicEventService } from './music-event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  musicevents: MusicEvent[];

  constructor(private musicEventService: MusicEventService) { }

  ngOnInit(): void {
    this.musicevents = this.musicEventService.GetMusicEvents();
  }

  logName(value: string) {
    console.log(value);
  }
}
