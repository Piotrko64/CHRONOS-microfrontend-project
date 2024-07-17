import { Component, Input } from '@angular/core';

@Component({
  selector: 'add-event-images-section',
  templateUrl: './images-section.component.html',
  styleUrl: './images-section.component.scss',
})
export class ImagesSectionComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) images: string[] = [];

  protected selectImage() {}
}
