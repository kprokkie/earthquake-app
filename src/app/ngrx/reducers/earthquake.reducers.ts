import { createReducer, on } from '@ngrx/store';
import { Earthquake } from '../../interfaces/earthquake.interface';

import * as fromEarthquakeActions from '../actions/earthquake.actions';

export interface EarthquakeState {
    earthquakes: Earthquake[];
}

export const initialState: EarthquakeState = {
    earthquakes: []
}

const earthquakeReducer = createReducer(
    initialState,
    on(fromEarthquakeActions.loadEarthquakes,
        (state: EarthquakeState, { payload }) => ({ ...state, earthquakes: payload }))
);

export function reducer(state, action) {
    return earthquakeReducer(state, action);
}