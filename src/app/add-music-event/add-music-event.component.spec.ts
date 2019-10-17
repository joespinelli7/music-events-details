import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMusicEventComponent } from './add-music-event.component';

describe('AddMusicEventComponent', () => {
  let component: AddMusicEventComponent;
  let fixture: ComponentFixture<AddMusicEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMusicEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMusicEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
