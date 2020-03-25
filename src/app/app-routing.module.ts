import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EarthquakesComponent } from './views/earthquakes/earthquakes.component';
import { ErrorComponent } from './views/error/error.component';
import { EarthquakesResolver } from './resolvers/earthquakes.resolver';

const routes: Routes = [
  { path: 'earthquakes', component: EarthquakesComponent, resolve: { earthquakes: EarthquakesResolver } },
  { path: '', redirectTo: 'earthquakes', pathMatch: 'full' },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
