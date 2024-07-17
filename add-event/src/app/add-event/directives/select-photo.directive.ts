import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[addEventSelectPhoto]',
})
export class SelectPhotoDirective {
  @HostListener('click', ['$event']) onClick(event: Event) {
    (event.target as HTMLElement).classList.toggle('image-checkbox-checked');
  }
}
