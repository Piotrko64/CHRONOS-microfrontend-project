import { Component, Input } from '@angular/core';

const MAIN_SERVER_URL = 'http://localhost:4300/';
const IMAGES_LOCATION = 'assets/elf.jpg';
const EXTENSION = '.avif';

@Component({
  selector: 'add-event-image',
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent {
  @Input({ required: true, transform: addPath }) name!: string;
}
function addPath(image: string) {
  return MAIN_SERVER_URL.concat(IMAGES_LOCATION, image, EXTENSION);
}
