import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ResponseWeather } from 'src/app/core/models/response-weather';
import { CityWeather } from 'src/app/core/models/city-weather';
import { Store } from '@ngrx/store';

@Injectable()
export class WeatherService {
    private  API_WEATHER_URL =
    'https://api.openweathermap.org/data/2.5/group?id=3871336,3435910,3936456,3448439&units=metric&appid=17300387840e5ef455c5fa68681528af';

    public response: ResponseWeather = null;
    public cityWeather: CityWeather[] = [];

    constructor(private httpClient: HttpClient, private store: Store<any>) {}
    public callWeatherApi() {
        console.log('callWeatherApi');
        this.httpClient.get<ResponseWeather>(this.API_WEATHER_URL)
        .pipe(map(res => res.list))
        .subscribe(data =>  {
            const state = { type: 'ADD_WEATHER', payload: data };
            this.store.dispatch(state);
        });
    }
}
