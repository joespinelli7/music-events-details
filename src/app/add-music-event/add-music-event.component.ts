import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MusicEvent } from '../MusicEvent';
import { MusicEventService } from '../music-event.service';
// FormControl in @angular/forms

@Component({
  selector: 'app-add-music-event',
  templateUrl: './add-music-event.component.html',
  styleUrls: ['./add-music-event.component.scss']
})
export class AddMusicEventComponent implements OnInit {

  musicEventForm: FormGroup;

  constructor(private formbuilder: FormBuilder, private router: Router, private musicEventService: MusicEventService) {
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
