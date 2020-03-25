import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Action, Store, select } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { take } from 'rxjs/operators';
import { AppState } from '../ngrx/reducers';

import { getEarthquakes } from '../ngrx/actions/earthquake.actions';
import { selectEarthquakes } from '../ngrx/selectors/earthquake.selectors';

import { EarthquakeActionTypes } from '../ngrx/actions/earthquake.actions';

import { Earthquake } from 'src/app/interfaces/earthquake.interface';
import { Observable } from 'rxjs';


@Injectable()
export class EarthquakesResolver implements Resolve<Action> {

    earthquakes$: Observable<Earthquake[]>;

    constructor(private store: Store<AppState>,
        private actions$: Actions) { }

    resolve(): Observable<Action> {

        this.earthquakes$ = this.store.pipe(select(selectEarthquakes), take(1));

        console.log(this.earthquakes$);

        if (true) {
            this.store.dispatch(getEarthquakes());
            const response = this.actions$.pipe(ofType(EarthquakeActionTypes.LOAD_EARTHQUAKES));
            return response.pipe(take(1));
        }

    }

}