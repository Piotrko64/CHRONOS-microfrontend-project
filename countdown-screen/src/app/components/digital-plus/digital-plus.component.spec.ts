import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalPlusComponent } from './digital-plus.component';

describe('DigitalPlusComponent', () => {
  let component: DigitalPlusComponent;
  let fixture: ComponentFixture<DigitalPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalPlusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
