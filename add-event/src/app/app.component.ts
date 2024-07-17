import { Component } from '@angular/core';
import { timer } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'add-event';

  ngOnInit() {
    window.addEventListener(
      'build',
      (e) => {
        console.log('AAAAA');
      },
      false
    );
    timer(0, 1000).subscribe(() => {
      this.title = this.title + 'aa';
    });
  }
}
