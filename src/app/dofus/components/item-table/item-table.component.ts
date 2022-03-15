import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Item, Statistic } from '../../interfaces/dofus.interface';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.css']
})
export class ItemTableComponent implements OnInit, OnChanges {

  @Input() items: Item[] = [];
  
  // @Input() stats: {[key: string]: Statistic }[] = [];
  itemSelected!: Item | undefined;
  
  @Output() onPressButton : EventEmitter<any> = new EventEmitter();

  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

  pressButton( id: number ){
    // this.onPressButton.emit( id );
    console.log( id );
    const element = this.items.find( element => element._id === id );
    this.itemSelected = element;
    console.log(this.itemSelected);
    
    
  }


}
