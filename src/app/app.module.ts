import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MusicEventComponent } from './music-event/music-event.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';
import { PriceRangePipe } from './price-range.pipe';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MusicEventListComponent } from './music-event-list/music-event-list.component'
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddMusicEventComponent } from './add-music-event/add-music-event.component';
import { MusicEventDetailsComponent } from './music-event-details/music-event-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicEventComponent,
    PriceRangePipe,
    LoginComponent,
    MusicEventListComponent,
    NotFoundComponent,
    AddMusicEventComponent,
    MusicEventDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    RouterModule.forRoot([{
      path: 'home',
      component: MusicEventListComponent
    }, {
      path: 'login',
      component: LoginComponent
    }, {
      path: 'event/add',
      component: AddMusicEventComponent
    }, {
      path: 'event/:id',
      component: MusicEventDetailsComponent
    }, {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: '**',
      component: NotFoundComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
