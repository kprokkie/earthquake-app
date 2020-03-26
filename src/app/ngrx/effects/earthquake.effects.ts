import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { EMPTY } from 'rxjs';
import { tap, map, mergeMap, catchError } from 'rxjs/operators';

import { HttpService } from '../../services/http.service';
import { Earthquake } from '../../interfaces/earthquake.interface';

import * as fromEarthquakeActions from '../actions/earthquake.actions';

@Injectable()
export class EarthquakeEffects {

    constructor(
        private actions$: Actions,
        private router: Router,
        private httpService: HttpService
    ) { }

    getEarthquakes$ = createEffect(() => this.actions$.pipe(
        ofType(fromEarthquakeActions.EarthquakeActionTypes.GET_EARTHQUAKES),
        mergeMap(() => this.httpService.getEarthquakes()
            .pipe(
                map((data: Earthquake[]) => (fromEarthquakeActions.loadEarthquakes({ payload: data }))),
                catchError(() => {
                    this.router.navigateByUrl('/error');
                    return EMPTY;
                })
            )))
    );
}
