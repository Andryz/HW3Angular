import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { IData } from '../common/data/data';

@Component({
  selector: 'app-el-left',
  templateUrl: './el-left.component.html',
  styleUrls: ['./el-left.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ElLeftComponent implements OnInit {

  @Input()
  public tours: IData;

  public text = '';
  public firstImg: string;
  public secondImg: string;
  public log(value): any{
    this.firstImg = value.path[2].children[0].children[0].src;
    console.log(value);
    console.log(value.path[2].children[0].children[0].src);
    console.log(value.path[2].children[1].children[0].src);
    // console.log(value);
  }
  constructor() { }

  ngOnInit() {
  }

}
