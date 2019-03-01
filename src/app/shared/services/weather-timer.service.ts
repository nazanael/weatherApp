import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherTimerService {
    private  API_WEATHER_URL =
    'https://api.openweathermap.org/data/2.5/group?id=3871336,3435910,3936456,3448439&units=metric&appid=17300387840e5ef455c5fa68681528af';

    public currentWeather: any = null;

    constructor(private httpClient: HttpClient) {}
    public callWeatherApi() {
        console.log('callWeatherApi');
        this.httpClient.get(this.API_WEATHER_URL)
        .subscribe(data => this.currentWeather = data);
    }
}
