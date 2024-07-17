import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-plus',
  templateUrl: './digital-plus.component.html',
  styleUrls: ['./digital-plus.component.scss'],
})
export class DigitalPlusComponent implements OnInit {
  @Input() versionList = false;
  constructor() {}

  ngOnInit(): void {}
}
