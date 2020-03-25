import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthquakesComponent } from './earthquakes.component';

describe('EarthquakesComponent', () => {
  let component: EarthquakesComponent;
  let fixture: ComponentFixture<EarthquakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarthquakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthquakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
