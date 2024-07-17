import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'add-event-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm() {
    this.form = this.fb.group({
      name: this.fb.control(''),
      description: this.fb.control(''),
      date: this.fb.control(''),
      time: this.fb.control(this.getCurrentTime()),
    });
  }

  private getCurrentTime() {
    const date = new Date();
    return { hour: date.getHours(), minute: date.getMinutes() };
  }
}
