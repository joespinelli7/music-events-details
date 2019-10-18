import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MusicEvent } from '../MusicEvent';

@Component({
  selector: 'app-music-event',
  templateUrl: './music-event.component.html',
  styleUrls: ['./music-event.component.scss']
})

export class MusicEventComponent {
  // @Input decorator used to pass data from parent to child component. From app.component parent to this child component.
  @Input() event: MusicEvent;

  // simply function to add an exclamation point to each event title in html.
  AddBang(value: string): string {
    return value + '!';
  }

}
