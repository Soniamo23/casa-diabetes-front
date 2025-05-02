import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrusel } from '../domain/carrousel';
import { enviroment } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CarrouselServiceService {

  constructor(private http: HttpClient) { }

  getCarrousel(): Observable<Carrusel[]>{
    let url = enviroment.WS_PATH+"/carrousel"
    return  this.http.get <Carrusel[]>(url);
  }

}
