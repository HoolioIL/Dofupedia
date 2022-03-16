import { TitleCasePipe } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
    `
      .button__search {
        /* background-color: #6E49D9; */
        background-image: linear-gradient(10deg, #00738e 0, #007292 5.56%, #007097 11.11%, #006f9a 16.67%, #086d9c 22.22%, #276b9e 27.78%, #39699e 33.33%, #48669d 38.89%, #55649c 44.44%, #616199 50%, #6c5e95 55.56%, #755b91 61.11%, #7e598c 66.67%, #855686 72.22%, #8b5480 77.78%, #915279 83.33%, #955072 88.89%, #984f6b 94.44%, #9a4f64 100%);
        color: white;
        padding: 8px;
        border: 1px solid;
        border-color: #6E49D9;
        border-radius: 10%;
        text-align: center;
        font-size: 15px;
        cursor: pointer;
        text-decoration: none;
        }
    `
  ]
})
export class SearchComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  text: string = '';

  constructor( private titleCase: TitleCasePipe) { }

  ngOnInit(): void {
  }

  search(){
    if(this.text.trim().length > 0){
      //Por detrá de escena se pondrá la primera letra en mayus (caso simple) porque la API es caseSensitive
      this.onEnter.emit( this.titleCase.transform( this.text ));
    }
  }
  // TODO:Aquí debería poner el debounce pero lo dejaré pendiente
  checkText(){
    if( this.text.trim().length === 0){
      this.clear();
    }
  }

  clear() {
    this.text = ''
    //Para el reset de la busqueda. Al aparecer este icono solo al tener texto no se permitirá mandar texto vacío a cada rato
    this.onEnter.emit( this.text );
  }

}
