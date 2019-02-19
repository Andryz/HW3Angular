import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { IData } from '../common/data/data';

@Component({
  selector: 'app-el-left',
  templateUrl: './el-left.component.html',
  styleUrls: ['./el-left.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ElLeftComponent implements OnInit {

  @Input()
  public tours: IData[];

  @Output()
  public ImageEmitter = new EventEmitter<IData>();

  // Свойство
  public text = '';
  public firstImg: string;
  public arrTitle = [];
  public arrTitleUniq = [];




  constructor() { }

  ngOnInit() {
    this.uniqArr()
    this.clickTour(this.tours[0])
    
  }

  public clickTour(tour: IData): any{
    this.firstImg = tour.img
    this.ImageEmitter.emit(tour);
  }
  // Метод
  uniqArr(){
    for (let tour of this.tours){
      this.arrTitle.push(tour.type); 
    }
    function uniq( value, index, self){
      return self.indexOf(value) === index;
    }
    this.arrTitleUniq = this.arrTitle.filter(uniq);
  }

}


