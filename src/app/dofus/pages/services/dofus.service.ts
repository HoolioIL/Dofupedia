import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { DofusChamp } from '../../interfaces/dofus.interface';

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
  


}
