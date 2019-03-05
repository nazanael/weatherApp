import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { WeatherService } from 'src/app/shared/services/weather-service';
import { CityWeather } from 'src/app/core/models/city-weather';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/core/services/config.service';
@Component({
    selector: 'app-weather-item',
    templateUrl: './weather-item.component.html',
    styleUrls: ['./weather-item.component.scss'],
})
export class WeatherItemComponent {

    @Input() weather: CityWeather;

    getIconUrl(cityWeather: CityWeather) {
        if (cityWeather && cityWeather.weather) {
            return ConfigService.Configuration.weatherIconUrl + cityWeather.weather[0].icon + '.png';
        }
    }

    getRoundNumber(numberToRound: number): number {
        return numberToRound ? Math.round(numberToRound) : null;
    }
}
