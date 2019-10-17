import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicEventDetailsComponent } from './music-event-details.component';

describe('MusicEventDetailsComponent', () => {
  let component: MusicEventDetailsComponent;
  let fixture: ComponentFixture<MusicEventDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicEventDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
