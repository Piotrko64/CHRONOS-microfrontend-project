import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-digital-number',
  templateUrl: './digital-number.component.html',
  styleUrls: ['./digital-number.component.scss'],
})
export class DigitalNumberComponent {
  @Input() activeNumbers = [1, 2, 3, 4, 5, 6, 7];
  @Input() versionList = false;

  isActiveNumber(numberId: number) {
    return !!this.activeNumbers?.find(
      (numberDigital) => numberDigital === numberId
    );
  }
}
