import { CityWeather } from './city-weather';

export interface ResponseWeather {
    cnt: number;
    list: CityWeather[];
}
