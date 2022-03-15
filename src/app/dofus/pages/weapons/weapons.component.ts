import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from '../../interfaces/dofus.interface';
import { DofusService } from '../services/dofus.service';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styles: [
  ]
})
export class WeaponsComponent implements OnInit, OnDestroy {

  suscription!: Subscription;
  weapons: Item[] = [];

  constructor( private ds: DofusService ) { }
  
  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

  ngOnInit(): void {

    this.suscription = this.ds.getWeapons().subscribe({
      next: ( weapons ) => {
        this.weapons = weapons;
      },
      error: ( err ) => {
        this.weapons = []
      }
    })
  }

}
