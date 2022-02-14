import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterverifyComponent } from './voterverify.component';

describe('VoterverifyComponent', () => {
  let component: VoterverifyComponent;
  let fixture: ComponentFixture<VoterverifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoterverifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
