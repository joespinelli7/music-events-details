import { TestBed } from '@angular/core/testing';

import { MusicEventService } from './music-event.service';

describe('MusicEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusicEventService = TestBed.get(MusicEventService);
    expect(service).toBeTruthy();
  });
});
