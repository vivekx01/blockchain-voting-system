import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterloginComponent } from './voterlogin.component';

describe('VoterloginComponent', () => {
  let component: VoterloginComponent;
  let fixture: ComponentFixture<VoterloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoterloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
