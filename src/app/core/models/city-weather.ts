import { MainWeather } from './main-weather';
import { WeatherDescription } from './weather-description';

export interface CityWeather {
    id: number;
    name: string;
    main?: MainWeather;
    weather?: WeatherDescription[];
}
