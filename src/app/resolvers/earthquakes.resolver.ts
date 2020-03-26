import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Action, Store, select } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { AppState } from '../ngrx/reducers';
import { getEarthquakes } from '../ngrx/actions/earthquake.actions';
import { EarthquakeActionTypes } from '../ngrx/actions/earthquake.actions';

import { Earthquake } from 'src/app/interfaces/earthquake.interface';

@Injectable()
export class EarthquakesResolver implements Resolve<Action> {

    earthquakes$: Observable<Earthquake[]>;

    constructor(
        private store: Store<AppState>,
        private actions$: Actions) { }

    resolve(): Observable<Action> {
        this.store.dispatch(getEarthquakes());
        const response = this.actions$.pipe(ofType(EarthquakeActionTypes.LOAD_EARTHQUAKES));
        return response.pipe(take(1));
    }

}
