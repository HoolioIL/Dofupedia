import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { DofusChamp, Item } from '../../interfaces/dofus.interface';

@Injectable({
  providedIn: 'root'
})
export class DofusService {

  constructor( private http: HttpClient) { }

  private _baseUrl = environment.baseUrl;
  
  getClasses(): Observable<DofusChamp[]>{

    const url = `${ this._baseUrl }/classes`;

    return this.http.get<DofusChamp[]>( url,  )
    .pipe(
      tap( resp => {
        if ( !localStorage.getItem('classes')){
          localStorage.setItem('classes', JSON.stringify( resp ))
        }
      })
    );

  }

// Chapeau = Sombrero
  getEquipments( type = 'Chapeau', total = 20 ): Observable<Item[]>{

    const url = `${ this._baseUrl }/equipments`;

    const params = new HttpParams()
                      .set('filter[where][level]', 200 )
                      .set('filter[where][type]', type )
                      .set('filter[limit]', total )

    return this.http.get<Item[]>( url, { params } );

  }
  

  getWeapons( min = 190, max = 200, total = 20 ): Observable<Item[]>{

    // No sé por qué no funcionó enviando los params como la función anterior
    const url = `${this._baseUrl}/weapons?filter[where][level][between]=${min}&filter[where][level][between]=${max}&filter[limit]=${total}`;
    return this.http.get<Item[]>( url );
  }


}
