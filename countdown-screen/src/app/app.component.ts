import { Component } from '@angular/core';

type CurrentScreen = {
  endDate: Date;
  name: string;
  description: string;
  img: string;
  time: string;
  date: Record<'day' | 'month' | 'year', number>;
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
    const currectScreenData: CurrentScreen = JSON.parse(
      localStorage.getItem('current-event')!
    );
    console.log(currectScreenData);
    if (!currectScreenData) return;

    this.title = currectScreenData.name;
    this.description = currectScreenData.description;
    this.backgroundUrl = currectScreenData.img;

    const { year, month, day } = currectScreenData.date;
    const { hour, minute } = this.convertTo24Hour(currectScreenData.time);

    this.eventDate = new Date(year, month - 1, day, hour, minute);

    if (currectScreenData.img) {
      const bodyElement = document.querySelector('body');

      if (bodyElement && currectScreenData.img) {
        bodyElement.style.backgroundImage = `url(${currectScreenData.img})`;
      }
    }
  }

  private convertTo24Hour(time: string) {
    const [hours, minutes] = time.split(/[: ]/);
    const period = time.split(' ')[1];

    let eventHour = parseInt(hours);
    const eventMinute = parseInt(minutes);

    if (period === 'PM' && eventHour !== 12) {
      eventHour += 12;
    } else if (period === 'AM' && eventHour === 12) {
      eventHour = 0;
    }

    return { hour: eventHour, minute: eventMinute };
  }
}
