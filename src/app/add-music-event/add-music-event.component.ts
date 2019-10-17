import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-music-event',
  templateUrl: './add-music-event.component.html',
  styleUrls: ['./add-music-event.component.scss']
})
export class AddMusicEventComponent implements OnInit {

  musicEventForm: FormGroup;

  constructor() {
    this.musicEventForm = new FormGroup({
      Name: new FormControl(),
      Price: new FormControl(),
      Date: new FormControl(),
      Description: new FormControl(),
      ImageUrl: new FormControl()
    })
  }

  ngOnInit() {
  }

}
