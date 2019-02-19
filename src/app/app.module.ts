import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ElLeftComponent } from './el-left/el-left.component';
import { TitleFilterPipe } from './common/pipe/title-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ElLeftComponent,
    TitleFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
