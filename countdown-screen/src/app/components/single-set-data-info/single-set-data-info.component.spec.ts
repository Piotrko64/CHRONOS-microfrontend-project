import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSetDataInfoComponent } from './single-set-data-info.component';

describe('SingleSetDataInfoComponent', () => {
  let component: SingleSetDataInfoComponent;
  let fixture: ComponentFixture<SingleSetDataInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleSetDataInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSetDataInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return false', () => {
    const booleanInput = component.versionList;

    expect(booleanInput).toBeFalse();
  });
});
