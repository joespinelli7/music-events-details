import { Component, OnInit } from '@angular/core';
import { MusicEventService } from '../music-event.service';
import { MusicEvent } from '../MusicEvent';

@Component({
  selector: 'app-music-event-list',
  templateUrl: './music-event-list.component.html',
  styleUrls: ['./music-event-list.component.scss']
})
export class MusicEventListComponent implements OnInit {
  musicevents: MusicEvent[];

  constructor(private musicEventService: MusicEventService) { }

  // upon component initialization, grab all the music events from the music event service class.
  // ngOnInit is a good lifecycle method for this b/c it ensures the component is loaded before grabbing all the data.
  ngOnInit() {
    this.musicevents = this.musicEventService.GetMusicEvents();
  }
}
