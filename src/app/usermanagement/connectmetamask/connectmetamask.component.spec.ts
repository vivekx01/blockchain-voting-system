import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectmetamaskComponent } from './connectmetamask.component';

describe('ConnectmetamaskComponent', () => {
  let component: ConnectmetamaskComponent;
  let fixture: ComponentFixture<ConnectmetamaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectmetamaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectmetamaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
