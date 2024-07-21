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
    const allImages = document.querySelectorAll('.img-responsive');

    allImages.forEach((img) => {
      img.classList.remove('image-checkbox-checked');
    });

    setTimeout(() => {
      (event.target as HTMLElement).classList.toggle('image-checkbox-checked');
    });
  }
}
