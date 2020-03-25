import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { AppState } from '../../ngrx/reducers';

import { getEarthquakes } from '../../ngrx/actions/earthquake.actions';
import { selectEarthquakes } from '../../ngrx/selectors/earthquake.selectors';
import { Earthquake } from 'src/app/interfaces/earthquake.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-earthquakes',
  templateUrl: './earthquakes.component.html',
  styleUrls: ['./earthquakes.component.scss']
})
export class EarthquakesComponent implements OnInit {

  selectedEarthquake: Earthquake;
  earthquakes$: Observable<Earthquake[]>;

  constructor(private store: Store<AppState>,
    private router: Router) { }

  ngOnInit(): void {
    // this.store.dispatch(getEarthquakes());
    this.earthquakes$ = this.store.pipe(select(selectEarthquakes));
  }

  cardListener(earthquake: Earthquake): void {
    // this.router.navigateByUrl(`earthquakes/location/${id}`); 
    if (this.selectedEarthquake && this.selectedEarthquake === earthquake) {
        this.selectedEarthquake = null;
    } else {
      this.selectedEarthquake = earthquake;
    }
  }

}
