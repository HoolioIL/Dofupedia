import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/dofus.interface';
import { DofusService } from '../services/dofus.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styles: [
  ]
})
export class PetsComponent implements OnInit {

  loaded: boolean = false;
  hasError: boolean = false;
  pets: Item[] = [];

  constructor( private ds: DofusService) { }

  ngOnInit(): void {

    this.ds.getPets().subscribe({
      next: ( pets ) => {
        this.pets = pets;
        this.loaded = true;
        console.log('Leeré el getter', this.getPets);
        
      },
      error: ( err ) => {
        this.hasError = true;
        this.loaded = true;
        console.log( err );
      }
    })
  }

  get getPets(){
    return this.ds.pets;
  }


  searchPet( termino: string ){
    if( termino.trim().length != 0 ){
      this.ds.getPetByName( termino ).subscribe({
        next: ( pet ) => {
          this.pets = pet;
        },
        error: ( err ) => {
          //Llamo al getter para no volver a hacer una llamada a la API
          this.pets = this.getPets;
        }
      })
    }else {
      this.pets = this.getPets;
    }



  }
}
