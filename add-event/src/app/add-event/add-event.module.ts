import { NgModule } from '@angular/core';
import { AddEventComponent } from './add-event.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, JsonPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ImagesSectionComponent } from './components/images-section/images-section.component';
import { ImageComponent } from './components/image/image.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectPhotoDirective } from './directives/select-photo.directive';

@NgModule({
  declarations: [
    AddEventComponent,
    FormComponent,
    ImagesSectionComponent,
    ImageComponent,
    SelectPhotoDirective,
  ],
  imports: [
    CommonModule,
    NgbDatepickerModule,

    NgbTimepickerModule,
    FormsModule,

    ReactiveFormsModule,
  ],
  exports: [AddEventComponent],
})
export class AddEventModule {}
