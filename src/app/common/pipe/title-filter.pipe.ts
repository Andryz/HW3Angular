
import { IData } from '../data/data';
import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'titleFilter'
})
export class TitleFilterPipe implements PipeTransform {

  transform(tours: IData[], clickTitle: string): IData[] {
    if(!clickTitle){
      return tours;
    }
    return tours.filter( (tours)=>{
      return tours.type.toLowerCase()
        .includes(clickTitle.toLowerCase());
    });
  }

}
