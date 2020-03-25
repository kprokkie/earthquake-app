import { createAction, props } from '@ngrx/store';
import { Earthquake } from '../../interfaces/earthquake.interface';

export enum EarthquakeActionTypes {
    GET_EARTHQUAKES = '[Earthquake App] Get Earthquakes',
    LOAD_EARTHQUAKES = '[Earthquake App] Load Earthquakes Success'
}

export const getEarthquakes = createAction(EarthquakeActionTypes.GET_EARTHQUAKES);

export const loadEarthquakes = createAction(EarthquakeActionTypes.LOAD_EARTHQUAKES,
    props<{ payload: Earthquake[] }>());