import * as earthquakeReducer from './earthquake.reducers';

export interface AppState {
    earthquakesState: earthquakeReducer.EarthquakeState;
}

export const initialState: AppState = {
    earthquakesState: earthquakeReducer.initialState
};

export const reducers = {
    earthquakesState: earthquakeReducer.reducer
};
