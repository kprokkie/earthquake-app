import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { EarthquakesComponent } from './views/earthquakes/earthquakes.component';

import { Reducers } from './ngrx/reducers';
import { Effects } from './ngrx/effects';
import { CardComponent } from './components/card/card.component';
import { MapComponent } from './components/map/map.component';

import { EarthquakesResolver } from './resolvers/earthquakes.resolver';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { ErrorComponent } from './views/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    EarthquakesComponent,
    CardComponent,
    MapComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    StoreModule.forRoot(Reducers),
    BrowserAnimationsModule,
    EffectsModule.forRoot(Effects)
  ],
  providers: [EarthquakesResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
