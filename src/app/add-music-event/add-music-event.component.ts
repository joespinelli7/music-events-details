import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MusicEvent } from '../MusicEvent';
import { MusicEventService } from '../music-event.service';

@Component({
  selector: 'app-add-music-event',
  templateUrl: './add-music-event.component.html',
  styleUrls: ['./add-music-event.component.scss']
})
export class AddMusicEventComponent implements OnInit {
  // FormGroup: uesed to track the value and validity state of a group of FormControl instances.
  musicEventForm: FormGroup;

  constructor(private formbuilder: FormBuilder, private router: Router, private musicEventService: MusicEventService) {
    // FormBuilder to create the form and have first element of array for value user types in and second element
    // to set any validations on that input field.
    this.musicEventForm = this.formbuilder.group({
      Name: ['', [Validators.required, Validators.minLength(3)]],
      Price: ['', [Validators.required]],
      Date: ['', [Validators.required]],
      Description: ['', [Validators.required, Validators.minLength(15)]],
      ImageUrl: ['']
    })
    // this.musicEventForm = new FormGroup({
    //   Name: new FormControl('Initial value', [Validators.required, Validators.minLength(3)]),
    //   Price: new FormControl('', [Validators.required]),
    //   Date: new FormControl('', [Validators.required]),
    //   Description: new FormControl('', [Validators.required, Validators.minLength(15)]),
    //   ImageUrl: new FormControl()
    // })
  }

  ngOnInit() {
  }

  // takes all the info the user types in on the html Add btn and saves it in musicEvent variable.
  // then pushes that event into the musicevent service class to add it to the page.
  Add() {
    const musicEvent: MusicEvent = {
      name: this.musicEventForm.controls.Name.value,
      price: this.musicEventForm.controls.Price.value,
      date: new Date(this.musicEventForm.controls.Date.value),
      description: this.musicEventForm.controls.Description.value,
      imageSrc: this.musicEventForm.controls.ImageUrl.value,
    };
    this.musicEventService.AddMusicEvent(musicEvent);
    this.router.navigate(['./home']);
  }

  Cancel() {
    this.router.navigate(['./home']);
  }

}
