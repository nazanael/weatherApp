import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WeatherService } from 'src/app/shared/services/weather-service';
import { CityWeather } from 'src/app/core/models/city-weather';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/core/services/config.service';
@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {

    currentWeather: Observable<CityWeather[]>;

    constructor(private store: Store<any>, private weatherService: WeatherService) {}

    ngOnInit() {
        this.currentWeather = this.store.select('currentWeather');
    }
}
