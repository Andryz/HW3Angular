import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ElLeftComponent } from './el-left/el-left.component';
import { TitleFilterPipe } from './common/pipe/title-filter.pipe';
import { PhonePipe } from './common/pipe/phone.pipe';
import { WeatherComponent } from './weather/weather.component';
import { StatsComponent } from './stats/stats.component';


@NgModule({
  declarations: [
    AppComponent,
    ElLeftComponent,
    TitleFilterPipe,
    WeatherComponent,
    StatsComponent,
    PhonePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
