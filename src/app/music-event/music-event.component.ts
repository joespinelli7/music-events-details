import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MusicEvent } from '../MusicEvent';

@Component({
  selector: 'app-music-event',
  templateUrl: './music-event.component.html',
  styleUrls: ['./music-event.component.scss']
})

export class MusicEventComponent {
  @Input() event: MusicEvent;

  AddBang(value: string): string {
    return value + '!';
  }

}
