import { Component, ViewChild } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { landscapesBck, petsBck, abstractBck } from './constants/backgrounds';

@Component({
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.scss',
})
export class AddEventComponent {
  @ViewChild(FormComponent) formComponent!: FormComponent;

  protected landscapesBck = landscapesBck;
  protected petsBck = petsBck;
  protected abstractBck = abstractBck;

  protected addEventHndler() {
    console.log(this.formComponent.form.value);
  }
}
