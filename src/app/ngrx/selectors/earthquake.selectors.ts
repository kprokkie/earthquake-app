import { createSelector } from '@ngrx/store';
import { selectEarthquakeState } from './index';
import { Earthquake } from 'src/app/interfaces/earthquake.interface';

export const selectEarthquakes = createSelector(
    selectEarthquakeState,
    state => state.earthquakes
)

export const selectEarthquakeById = createSelector(
    selectEarthquakes,
    (earthquakes, props) => earthquakes.filter((eq: Earthquake) => eq.eqid === props.id)[0]
)