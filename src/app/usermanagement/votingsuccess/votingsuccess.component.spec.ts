import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingsuccessComponent } from './votingsuccess.component';

describe('VotingsuccessComponent', () => {
  let component: VotingsuccessComponent;
  let fixture: ComponentFixture<VotingsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotingsuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
