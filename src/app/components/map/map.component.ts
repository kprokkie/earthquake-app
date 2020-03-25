import { Component, Input, OnInit, OnChanges, OnDestroy, AfterViewInit, NgZone, SimpleChanges } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

import { Earthquake } from '../../interfaces/earthquake.interface';

import { MAGNITUDE } from '../../constants/magnitude.constants';
import { COLOR } from '../../constants/color.constants';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {

  @Input() earthquakes: Earthquake[];
  @Input() selectedEarthquake: Earthquake;

  mapData: any[];
  imageSeries: am4maps.MapImageSeries;
  mapChart: am4maps.MapChart;

  constructor(private zone: NgZone) { }

  ngOnInit(): void {
    this.mapData = this.generateMapData(this.earthquakes);
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (!!changes && !!changes.selectedEarthquake.currentValue) {

      this.mapChart.goHome();

      setTimeout(() => {
        this.mapData = this.generateMapData([this.selectedEarthquake]);
        this.imageSeries.data = this.mapData;

        this.mapChart.zoomToGeoPoint({
          longitude: this.selectedEarthquake.lng,
          latitude: this.selectedEarthquake.lat
        }, 3);
      }, 1000);

      console.log(this.mapChart.zoomLevel);
      console.log(this.mapChart.zoomGeoPoint);
    } else {
      if (this.mapChart) {
        this.mapData = this.generateMapData(this.earthquakes);
        this.imageSeries.data = this.mapData;

        this.mapChart.goHome();
      }
    }

  }

  generateMapData(earthquakes): Earthquake[] {
    return earthquakes.map((eq: Earthquake) => {
      return {
        title: eq.magnitude,
        latitude: eq.lat,
        longitude: eq.lng,
        color: this.getPlotColor(eq.magnitude)
      }
    });
  }

  getPlotColor(magnitude: number): string {
    if (magnitude >= MAGNITUDE.RANGE.HIGH) return COLOR.RED;
    else if (magnitude >= MAGNITUDE.RANGE.MEDIUM) return COLOR.ORANGE;
    else return COLOR.GREEN;
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {

      // map chart instance
      this.mapChart = am4core.create("mapChart", am4maps.MapChart);

      // set map definition
      this.mapChart.geodata = am4geodata_worldLow;

      // set projection
      this.mapChart.projection = new am4maps.projections.Miller();

      // create map polygon series
      let polygonSeries = this.mapChart.series.push(new am4maps.MapPolygonSeries());

      // exclude Antartica
      polygonSeries.exclude = ["AQ"];

      // make map load polygon
      polygonSeries.useGeodata = true;

      // configure series
      let polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.tooltipText = "{name}";
      polygonTemplate.polygon.fillOpacity = 0.6;
      polygonTemplate.propertyFields.fill = "color";
      //polygonTemplate.fill = am4core.color("#74B266");

      // create hover state and set alternative fill color
      let hs = polygonTemplate.states.create("hover");
      hs.properties.fill = this.mapChart.colors.getIndex(0);

      // add image series
      this.imageSeries = this.mapChart.series.push(new am4maps.MapImageSeries());
      this.imageSeries.mapImages.template.propertyFields.longitude = "longitude";
      this.imageSeries.mapImages.template.propertyFields.latitude = "latitude";
      this.imageSeries.mapImages.template.tooltipText = "{title}";
      this.imageSeries.mapImages.template.propertyFields.url = "url";

      let circle = this.imageSeries.mapImages.template.createChild(am4core.Circle);
      circle.radius = 3;
      circle.propertyFields.fill = "color";

      let circle2 = this.imageSeries.mapImages.template.createChild(am4core.Circle);
      circle2.radius = 3;
      circle2.propertyFields.fill = "color";

      circle2.events.on("inited", function (event) {
        animateBullet(event.target);
      })

      function animateBullet(circle) {
        let animation = circle.animate([{ property: "scale", from: 1, to: 5 }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
        animation.events.on("animationended", function (event) {
          animateBullet(event.target.object);
        })
      }

      // bind map data to map chart 
      this.imageSeries.data = this.mapData;
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.mapChart) {
        this.mapChart.dispose();
      }
    });
  }

}