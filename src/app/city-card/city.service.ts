import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, throwError } from 'rxjs';
import { Ville } from '../data/Ville';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }



  getWeather(nomVille: string): Subject<Ville> {

    let sub = new Subject<Ville>();

    let urlService = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${nomVille}?unitGroup=us&key=ZMM2U9XUSJ6UV37L4L49NQACY&options=preview&contentType=json`;

    this.http.get<Ville>(urlService).subscribe(
        (ville: Ville) => {
          sub.next({...ville , nom: nomVille});
        }
      )

  return sub;

  }
}
