import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastvoteComponent } from './castvote.component';

describe('CastvoteComponent', () => {
  let component: CastvoteComponent;
  let fixture: ComponentFixture<CastvoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CastvoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CastvoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
