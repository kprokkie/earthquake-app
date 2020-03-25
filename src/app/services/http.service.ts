import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { Earthquake } from '../interfaces/earthquake.interface';
import { EARTHQUAKE_API } from '../constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getEarthquakes(): Observable<Earthquake[]> {
    return this.http.get<{ earthquakes: Earthquake[] }>(EARTHQUAKE_API)
      .pipe(
        tap((data: { earthquakes: Earthquake[] }) => console.log('HTTP Service: ', data)),
        map((data: { earthquakes: Earthquake[] }) => data.earthquakes),
        catchError(this.handleError)
      )
  }

  /**
   * Handle error
   * @param err - error in response
   */
  handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // back-end returned an unsuccessful response code & response body may contain what went wrong.
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
