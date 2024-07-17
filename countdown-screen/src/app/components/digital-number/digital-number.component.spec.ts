import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalNumberComponent } from './digital-number.component';

describe('DigitalNumberComponent', () => {
  let component: DigitalNumberComponent;
  let fixture: ComponentFixture<DigitalNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
