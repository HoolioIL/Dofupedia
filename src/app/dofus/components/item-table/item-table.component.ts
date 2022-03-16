import { Component, EventEmitter, Input,  Output } from '@angular/core';
import { Item } from '../../interfaces/dofus.interface';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.css']
})
export class ItemTableComponent {

  @Input() items: Item[] = [];
  
  // @Input() stats: {[key: string]: Statistic }[] = [];
  itemSelected!: Item | undefined;
  
  @Output() onPressButton : EventEmitter<any> = new EventEmitter();

  constructor() { }

  pressButton( id: number ){
    this.itemSelected = this.items.find( element => element._id === id );
  }


}
