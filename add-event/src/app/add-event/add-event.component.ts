import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { landscapesBck, petsBck, abstractBck } from './constants/backgrounds';

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

  protected addEventHndler() {
    console.log(this.formComponent.form.valid);
    console.log(this.formComponent.form);
    console.log(this.spaNavigation);

    const currentLS = JSON.parse(localStorage.getItem('events') || '[]');

    // localStorage.setItem()

    console.log([
      ...currentLS,
      {
        ...this.formComponent.form.value,
        img: (
          document.querySelector('.image-checkbox-checked') as HTMLImageElement
        ).src,
      },
    ]);

    localStorage.setItem(
      'events',
      JSON.stringify([
        ...currentLS,
        {
          ...this.formComponent.form.value,
          img: (
            document.querySelector(
              '.image-checkbox-checked'
            ) as HTMLImageElement
          ).src,
        },
      ])
    );

    // this.spaNavigation.nativeElement.click();
  }

  get isValidForm() {
    return this.formComponent?.form?.valid;
  }
}
