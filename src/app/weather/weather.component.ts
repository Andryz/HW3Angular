import { Component, Input } from '@angular/core';
import { IData } from '../common/data/data';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  @Input()
  tour: IData
  
  constructor() { }


}
