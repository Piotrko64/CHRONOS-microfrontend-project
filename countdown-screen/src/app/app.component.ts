import { Component } from '@angular/core';

type CurrentScreen = {
  endDate: Date;
  title: string;
  description: string;
  backgroundUrl: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected eventDate = new Date(new Date().getTime() + 100_000_000);
  protected title = '';
  protected description = '';
  protected backgroundUrl = '';
  protected isScreenSaverMode = false;

  protected turnFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      this.isScreenSaverMode = true;
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      this.isScreenSaverMode = false;
    }
  }

  ngOnInit() {
    console.log(new Date().getUTCDate());
    console.log(localStorage.getItem('currentScreen')!);
    const currectScreenData: CurrentScreen = JSON.parse(
      localStorage.getItem('currentScreen')!
    );
    console.log(currectScreenData);
    if (!currectScreenData) return;

    this.eventDate = new Date(currectScreenData.endDate);
    this.title = currectScreenData.title;
    this.description = currectScreenData.description;
    this.backgroundUrl = currectScreenData.backgroundUrl;
  }
}
