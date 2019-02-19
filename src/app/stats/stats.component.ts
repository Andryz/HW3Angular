import { Component, Input } from '@angular/core';
import { IData } from '../common/data/data';

@Component({
  selector: 'stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent  {

  @Input()
  tour: IData

  constructor() { }




}
