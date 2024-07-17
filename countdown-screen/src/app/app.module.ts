import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SingleSetDataInfoComponent } from './components/single-set-data-info/single-set-data-info.component';
import { WholeSetInfoComponent } from './components/whole-set-info/whole-set-info.component';
import { DigitalNumberComponent } from './components/digital-number/digital-number.component';
import { DigitalPlusComponent } from './components/digital-plus/digital-plus.component';

import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SingleSetDataInfoComponent,
    WholeSetInfoComponent,
    DigitalNumberComponent,
    DigitalPlusComponent,
  ],
  imports: [BrowserModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
