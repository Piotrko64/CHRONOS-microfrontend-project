import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WholeSetInfoComponent } from './whole-set-info.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('WholeSetInfoComponent', () => {
  let component: WholeSetInfoComponent;
  let fixture: ComponentFixture<WholeSetInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],

      declarations: [WholeSetInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WholeSetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('h1 should contain word: chroni', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    component.title = 'chroni';
    fixture.detectChanges();

    const h1 = compiled.querySelector('h1');

    expect(h1?.innerText).toContain('chroni');
  });
});
