import { Component, OnInit } from '@angular/core';
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

    addWeather() {
        this.weatherService.callWeatherApi();
        console.log(this.weatherService.currentWeathers);
    }

    //TODO: get in service, picture component?
    getIconUrl(cityWeather: CityWeather) {
        if (cityWeather && cityWeather.weather) {
            return ConfigService.Configuration.weatherIconUrl + cityWeather.weather[0].icon + '.png';
        }
    }

    getRoundNumber(numberToRound: number): number {
        return numberToRound ? Math.round(numberToRound) : null;
    }
}
