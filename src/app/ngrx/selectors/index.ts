import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers';

export const selectAppState = (state: AppState): AppState => state;

export const selectEarthquakeState = createSelector(
    selectAppState,
    (state: AppState) => state.earthquakesState
);
