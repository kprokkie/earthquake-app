import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Earthquake } from '../../interfaces/earthquake.interface';
import { MAGNITUDE } from '../../constants/magnitude.constants';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() earthquake: Earthquake;
  @Input() selectedEarthquake: Earthquake;

  @Output() cardEmitter: EventEmitter<Earthquake> = new EventEmitter<Earthquake>();

  constructor() { }

  ngOnInit(): void {
  }

  getClass(): string {
    const magnitude = this.earthquake.magnitude;
    if (magnitude >= MAGNITUDE.RANGE.HIGH) {
      return MAGNITUDE.CLASS.HIGH;
    } else if (magnitude >= MAGNITUDE.RANGE.MEDIUM) {
      return MAGNITUDE.CLASS.MEDIUM;
    } else {
      return MAGNITUDE.CLASS.LOW;
    }
  }

  clickCard(): void {
    this.cardEmitter.emit(this.earthquake);
  }

}
