import { Component } from '@angular/core';
import { data$, IData } from './common/data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'HW3';

  public tours$ = data$;
  public srcImg: string;
  public selectedTour: IData; 


  onClickImg(tour: IData){
    this.srcImg = tour.social_info.img;
    this.selectedTour = tour;
    console.log(tour);
    // console.log(this.selectedTour)
  }
}
