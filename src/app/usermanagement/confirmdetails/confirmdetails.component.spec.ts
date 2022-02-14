import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmdetailsComponent } from './confirmdetails.component';

describe('ConfirmdetailsComponent', () => {
  let component: ConfirmdetailsComponent;
  let fixture: ComponentFixture<ConfirmdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
