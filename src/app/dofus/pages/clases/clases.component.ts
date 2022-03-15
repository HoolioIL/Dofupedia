import { Component, OnInit } from '@angular/core';
import { DofusService } from '../services/dofus.service';
import { DofusChamp } from '../../interfaces/dofus.interface';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [
    `
      .container{
        height: 100vh;
      }
    `
  ]
})
export class ClasesComponent implements OnInit {

  classes: DofusChamp[] = [];

  constructor( private ds: DofusService ) { }

  ngOnInit(): void {

    if ( localStorage.getItem( 'classes' )){
      this.classes = JSON.parse( localStorage.getItem( 'classes' )! )
    }else{
      this.ds.getClasses()
          .subscribe({
            next: ( classes ) => {
              this.classes = classes
            },
            error: ( err ) => {
              this.classes = [];
            }
          })
    }


  }

}
