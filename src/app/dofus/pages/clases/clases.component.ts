import { Component, OnInit } from '@angular/core';
import { DofusService } from '../services/dofus.service';
import { DofusChamp } from '../../interfaces/dofus.interface';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [
   
  ]
})
export class ClasesComponent implements OnInit {

  classes: DofusChamp[] = [];

  constructor( private ds: DofusService ) { }

  ngOnInit(): void {

    if ( localStorage.getItem( 'classes' )){
      this.classes = JSON.parse( localStorage.getItem( 'classes' )! )
      console.log(this.classes);
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
