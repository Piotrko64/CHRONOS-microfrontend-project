import { Component, Input, ViewEncapsulation } from '@angular/core';
import { getObjectToDisplayClock } from './helpers/getObjectToDisplayClock';

@Component({
  selector: 'app-single-set-data-info',
  templateUrl: './single-set-data-info.component.html',
  styleUrls: ['./single-set-data-info.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class SingleSetDataInfoComponent {
  @Input() numbersOfDate = 2;
  @Input() nameTypeDate = 'seconds';
  @Input() versionList = false;

  objectToDisplayClock = getObjectToDisplayClock(this.numbersOfDate);

  ngOnChanges() {
    this.objectToDisplayClock = getObjectToDisplayClock(this.numbersOfDate);
  }
}
