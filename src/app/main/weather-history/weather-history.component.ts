import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { WeatherService } from 'src/app/shared/services/weather-service';
@Component({
    selector: 'app-weather-history',
    templateUrl: './weather-history.component.html',
    styleUrls: ['./weather-history.component.scss'],
})
export class WeatherHistoryComponent implements OnInit {

    weatherHistory: Observable<any>;
    currentIndex = 1;

    constructor(private store: Store<any>, private weatherService: WeatherService) {}

    ngOnInit() {
        this.weatherHistory = this.store.select('weather');
      }
      addWeather() {
        this.weatherService.callWeatherApi();
      }
}
