import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetfaucetComponent } from './getfaucet.component';

describe('GetfaucetComponent', () => {
  let component: GetfaucetComponent;
  let fixture: ComponentFixture<GetfaucetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetfaucetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetfaucetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
