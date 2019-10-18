import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  // simply used to render a can't find page screen if user types in URL that doesn't exist.
  // placed in app.module.ts as a final route.
  constructor() { }

  ngOnInit() {
  }

}
