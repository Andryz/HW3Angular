import { Component } from '@angular/core';
import { data$ } from './common/data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HW3';

  public tours$ = data$;
}
