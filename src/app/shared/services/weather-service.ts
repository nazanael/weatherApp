import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ResponseWeather } from 'src/app/core/models/response-weather';
import { CityWeather } from 'src/app/core/models/city-weather';
import { Store } from '@ngrx/store';
import { ConfigService } from 'src/app/core/services/config.service';
import { HttpService } from 'src/app/core/services/http.service';

@Injectable()
export class WeatherService {

    private weatherCallMilliseconds = 30000; //30 SECONDS
    private timerWeather: any = null;

    private  API_WEATHER_URL: string;
    public response: ResponseWeather = null;
    public currentWeathers: CityWeather[];

    constructor(private httpService: HttpService, private store: Store<any>) {
        this.API_WEATHER_URL = ConfigService.Configuration.weatherUrl + '?id='
        + ConfigService.Configuration.citiesIds.join() + '&units=metric&appid=' + ConfigService.Configuration.appId;
        this.weatherCallMilliseconds = ConfigService.Configuration.refreshTimeMs;
        this.initializeTimer();
    }
    public callWeatherApi() {
        this.httpService.callGetHttp<ResponseWeather>(this.API_WEATHER_URL)
        .pipe(map(res => res.list))
        .subscribe(data =>  {
            this.currentWeathers = data;
            let state = { type: 'ADD_WEATHER', payload: data };
            this.store.dispatch(state);
            state = { type: 'SET_CURRENT_WEATHER', payload: data };
            this.store.dispatch(state);
        });
    }

    public initializeTimer(): void {
        this.timerWeather = setInterval(() => {
            console.log(this.API_WEATHER_URL);
            //this.callWeatherApi();
        }, this.weatherCallMilliseconds);
    }
}
