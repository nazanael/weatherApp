import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './main/weather/weather.component';

export const appRoutes: Routes = [
  {
    path: 'weather',
    loadChildren: './main/weather/weather.module#WeatherModule',
  },
  {
    path: 'history',
    loadChildren: './main/weather-history/weather-history.module#WeatherHistoryModule',
  },
  {
    path: '',
    redirectTo: '/weather',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'weather' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
