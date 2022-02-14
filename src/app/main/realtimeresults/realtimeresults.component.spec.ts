import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeresultsComponent } from './realtimeresults.component';

describe('RealtimeresultsComponent', () => {
  let component: RealtimeresultsComponent;
  let fixture: ComponentFixture<RealtimeresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealtimeresultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimeresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
