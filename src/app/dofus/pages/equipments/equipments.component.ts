import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item, Statistic } from '../../interfaces/dofus.interface';
import { DofusService } from '../services/dofus.service';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styles: [
  ]
})
export class EquipmentsComponent implements OnInit, OnDestroy {

  equipments: Item[] = [];
  stats: { [key: string]: Statistic }[] = [];
  suscription!: Subscription;

  constructor( private ds: DofusService) { }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

  ngOnInit(): void {

    this.suscription = this.ds.getEquipments().subscribe({
      next: ( equipments ) => {
        this.equipments = equipments;
        console.log(this.equipments);
      },
      error: ( err )=> {
        this.equipments = [];
      }        
    })
  }

  showStats( id: number ){
    const values = this.equipments.find(element => element._id === id );
    if ( values?.statistics ){
      this.stats = values.statistics;
    }
    
  }

  

}
