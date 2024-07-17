import { calculateDifferentDates } from 'src/app/utils/calculateDifferentDates';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { interval, timer } from 'rxjs';
import { ObjectCountdown } from 'src/app/@types/ObjectCountdown';
import { typesNumbers } from 'src/app/data/digitalClock/typesNumbers';

@Component({
  selector: 'app-whole-set-info',
  templateUrl: './whole-set-info.component.html',
  styleUrls: ['./whole-set-info.component.scss'],
})
export class WholeSetInfoComponent implements OnInit {
  @Input({ required: true }) eventDate: Date = new Date();
  @Input({ required: true }) title = '';
  @Input({ required: true }) description = '';
  @Input({ required: true }) isScreenSaverMode = false;

  typesOfNumbers = typesNumbers;
  choosenEventDate = '';

  objectCountdown: ObjectCountdown = {
    end: false,
    days: 0,
    minutes: 0,
    seconds: 0,
    hours: 0,
  };

  ngOnInit() {
    timer(0, 1000).subscribe(() => {
      this.objectCountdown = calculateDifferentDates(this.eventDate);
    });
  }
}
