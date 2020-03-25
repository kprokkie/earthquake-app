import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../ngrx/reducers';
import { selectEarthquakes } from '../../ngrx/selectors/earthquake.selectors';

import { Earthquake } from 'src/app/interfaces/earthquake.interface';

@Component({
  selector: 'app-earthquakes',
  templateUrl: './earthquakes.component.html',
  styleUrls: ['./earthquakes.component.scss']
})
export class EarthquakesComponent implements OnInit {

  selectedEarthquake: Earthquake;
  earthquakes$: Observable<Earthquake[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.earthquakes$ = this.store.pipe(select(selectEarthquakes));
  }

  cardListener(earthquake: Earthquake): void {
    if (this.selectedEarthquake && this.selectedEarthquake === earthquake) {
      this.selectedEarthquake = null;
    } else {
      this.selectedEarthquake = earthquake;
    }
  }

}
