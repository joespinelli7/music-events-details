import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicEventListComponent } from './music-event-list.component';

describe('MusicEventListComponent', () => {
  let component: MusicEventListComponent;
  let fixture: ComponentFixture<MusicEventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicEventListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
