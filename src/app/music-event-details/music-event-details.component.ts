import { Component, OnInit } from '@angular/core';
import { MusicEvent } from '../MusicEvent';
import { MusicEventService } from '../music-event.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-music-event-details',
  templateUrl: './music-event-details.component.html',
  styleUrls: ['./music-event-details.component.scss']
})
export class MusicEventDetailsComponent implements OnInit {
  event: MusicEvent;

  constructor(private musicEventService: MusicEventService, private activatedRoute: ActivatedRoute) { }

  // activatedRoute is used to provide access to information about a route associated with a component. So this will
  // grab info of the specific music event we are dealing with.
  // paramMap: A map that provides access to the required and optional parameters specific to a route. The map
  // supports retrieving a single value with get(). So using paramMap to subscribe and pick out the exact
  // music event we want to see rendered.
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.event = this.musicEventService.GetMusicEvent(+params.get('id'));
    })
  }

}
