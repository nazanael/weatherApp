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
        // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        // Add 'implements OnInit' to the class.
        //this.store.select('cart').subscribe((state => this.weatherStore = state));
        this.weatherHistory = this.store.select('weather');
        //this.store.select('weather').subscribe(state => this.currentState = state);
      }
    
      addWeather() {
        //const payload = 'Item' + this.currentIndex;
        //this.currentIndex++;
        //const state = { type: 'ADD_WEATHER', payload };
        //this.store.dispatch(state);
        this.weatherService.callWeatherApi();
      }
}
