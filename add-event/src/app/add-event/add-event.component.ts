import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { landscapesBck, petsBck, abstractBck } from './constants/backgrounds';

const DEFAULT_BACKGROUND =
  'http://localhost:5050/img/main-background.ed394482.png';

@Component({
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.scss',
})
export class AddEventComponent {
  @ViewChild(FormComponent) formComponent!: FormComponent;
  @ViewChild('spaNavigation') spaNavigation!: ElementRef<HTMLAnchorElement>;
  protected landscapesBck = landscapesBck;
  protected petsBck = petsBck;
  protected abstractBck = abstractBck;

  protected addEventHandler() {
    const currentLS = JSON.parse(localStorage.getItem('events') || '[]');
    const img =
      (document.querySelector('.image-checkbox-checked') as HTMLImageElement)
        ?.src || DEFAULT_BACKGROUND;

    localStorage.setItem(
      'events',
      JSON.stringify([
        ...currentLS,
        {
          ...this.formComponent.form.value,
          img,
        },
      ])
    );

    localStorage.setItem(
      'current-event',
      JSON.stringify({
        ...this.formComponent.form.value,
        img,
      })
    );

    this.spaNavigation.nativeElement.click();
  }

  get isValidForm() {
    return this.formComponent?.form?.valid;
  }
}
