import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { Earthquake } from '../interfaces/earthquake.interface';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getEarthquakes(): Observable<Earthquake[]> {
    return this.http.get<{ earthquakes: Earthquake[] }>(environment.APIEndpoint)
      .pipe(
        tap((data: { earthquakes: Earthquake[] }) => console.log('HTTP Service: ', data)),
        map((data: { earthquakes: Earthquake[] }) => data.earthquakes),
        catchError(this.handleError)
      );
  }

  handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.statusText}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
