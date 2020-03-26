import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';

import { EarthquakesComponent } from './earthquakes.component';

import { AppState } from 'src/app/ngrx/reducers';

describe('EarthquakesComponent', () => {
  let component: EarthquakesComponent;
  let fixture: ComponentFixture<EarthquakesComponent>;
  let store: Store<AppState>;

  const mocks = {
    Store: {
      pipe: () => { }
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EarthquakesComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: Store, useValue: mocks.Store }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthquakesComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
