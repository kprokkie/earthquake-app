import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromViews from './views';
import * as fromResolvers from './resolvers';

const routes: Routes = [
  {
    path: 'earthquakes',
    component: fromViews.EarthquakesComponent,
    resolve: { earthquakes: fromResolvers.EarthquakesResolver }
  },
  { path: '', redirectTo: 'earthquakes', pathMatch: 'full' },
  { path: 'error', component: fromViews.ErrorComponent },
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
