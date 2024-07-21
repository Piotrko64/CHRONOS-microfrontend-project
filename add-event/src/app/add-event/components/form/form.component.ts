import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      name: this.fb.control('', Validators.required),
      description: this.fb.control('', Validators.required),
      date: this.fb.control(''),
      time: this.fb.control('04:00 PM'),
    });
  }
}
