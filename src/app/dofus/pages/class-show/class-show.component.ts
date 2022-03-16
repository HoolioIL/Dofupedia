import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { DofusChamp } from '../../interfaces/dofus.interface';
import { DofusService } from '../services/dofus.service';

@Component({
  selector: 'app-class-show',
  templateUrl: './class-show.component.html',
  styleUrls: ['./class-show.component.css']
})
export class ClassShowComponent implements OnInit {

  champ: DofusChamp | undefined;
  hasError: boolean = false;
  loaded: boolean = false;
  msgError: string = '';

  constructor( 
              private ar: ActivatedRoute,
              private ds: DofusService) { }

  ngOnInit(): void {

    this.ar.params
    .pipe(
      switchMap( ( { id }) => this.ds.getClassById( id ) ),
      tap( console.log )
      )
      .subscribe({
        next: ( resp ) => {
          this.champ = resp;
          this.loaded = true;
        },
        error: ( err ) => {
          if( err.status === 404 ){
            this.msgError = 'No se han encontrado datos para el identificador seleccionado'
          }else{
            this.msgError = '¡Ha ocurrido un problema! Inténtalo nuevamente más tarde'
          }
          this.hasError = true;
          this.loaded = true;
          // console.log( err );
        }
      })
      
    

  }
}
