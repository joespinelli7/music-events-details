import { Injectable } from '@angular/core';
import { MusicEvent } from './MusicEvent';

@Injectable({
  providedIn: 'root'
})
export class MusicEventService {
  // events to hold all data of the music events in an array of objects.
  events: MusicEvent[] = [
    {
      id: 0,
      name: 'ACL Festival',
      date: new Date('10/13/2020'),
      price: 150,
      description: 'An annual music festival held in Zilker Park in Austin, Texas on two consecutive three-day weekends.',
      imageSrc: 'https://image.freepik.com/free-psd/banner-template-summer-festival_23-2148174550.jpg'
    },
    {
      id: 1,
      name: 'Lollapalooza',
      date: new Date('08/02/2020'),
      price: 200,
      description: 'Lollapalooza is an annual four-day music festival based in Chicago, Illinois at Grant Park.',
      imageSrc: 'https://image.freepik.com/free-vector/colorful-music-event-poster-template_1361-1592.jpg'
    },
    {
      id: 2,
      name: 'Coachella',
      date: new Date('04/17/2020'),
      price: 400,
      description: 'The Indio desert becomes a fashionable hive of the coolest bands watched by trendy people and celebrities. Near the top of everyone`s bucket list of festivals, the Coachella lineup is a constant source of annual anticipation and a hotbed for musical discussion.',
      imageSrc: 'https://image.freepik.com/free-photo/crowd-people-dancefloor-with-hands-raised-disco-lights_106386-78.jpg'
    },
    {
      id: 3,
      name: 'South By South West',
      date: new Date('03/16/2020'),
      price: 100,
      description: 'Regarded as the ultimate trend-setter and launcher of careers, SXSW is an annual showcase of music, film and interactive highlights enjoyed through performances, showcases, talks, screenings and more.',
      imageSrc: 'https://img.freepik.com/free-vector/modern-music-event-poster-template_1361-1292.jpg?size=626&ext=jpg'
    },
    {
      id: 4,
      name: 'Ultra Music Festival',
      date: new Date('03/20/2020'),
      price: 300,
      description: 'Seen as the ultimate gathering for electronic music fans across the nation and globe, the streets of Miami turn into a bold and pumping party with worshipped DJs providing the summertime soundtrack.',
      imageSrc: 'https://image.freepik.com/free-vector/music-event-poster-template-with-colorful-shapes_1361-1591.jpg'
    }
  ];

  constructor() { }

  // used to return all the events in this service to component that calls this function and implemented in
  // music-event-list component.ts file to pull in all events upon initialization.
  GetMusicEvents(): MusicEvent[] {
    return this.events;
  }

  // used to return single event matching the id passed in of the targeted event and implemented in music-event-details
  // component.ts file to render a specific event.
  GetMusicEvent(id: number): MusicEvent {
    return this.events.find(event => event.id === id);
  }

  // used to add a new event to the music service event array and implemented in add-music-event component.ts.
  // takes values of form as an object with key value pairs and pushes it into music events array. 
  AddMusicEvent(musicEvent: MusicEvent) {
    musicEvent.id = this.events.length;
    this.events.push(musicEvent);
  }
}
