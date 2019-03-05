import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Chart } from 'chart.js';
import { WeatherService } from 'src/app/shared/services/weather-service';
import { ConfigService } from 'src/app/core/services/config.service';
import { CityWeather } from 'src/app/core/models/city-weather';
import { Subscription } from 'rxjs';
@Component({
    selector: 'app-weather-history',
    templateUrl: './weather-history.component.html',
    styleUrls: ['./weather-history.component.scss'],
})
export class WeatherHistoryComponent implements OnInit {
    weatherHistory: Array<CityWeather[]>;
    public chart: any = null;
    private numberOfCities: number = ConfigService.Configuration.citiesIds.length;
    private labelsChartArray: string[];
    private historyStoreSubscription: Subscription;

    constructor(private store: Store<any>, private weatherService: WeatherService) {}

    ngOnInit() {
        this.labelsChartArray = this.crateLabelsArray();
        this.historyStoreSubscription = this.store.select('weather').subscribe((data) => {
            this.weatherHistory = data;
            this.prepareCharts();
        });
    }

    addWeather() {
        this.weatherService.callWeatherApi();
    }

    private prepareCharts() {
        if (this.weatherHistory && this.weatherHistory.length > 0) {
            const lastWeatherHistory = this.weatherHistory[this.weatherHistory.length - 1];
            if (!this.chart) {
                const datasets = [];
                const labels = [];
                for (let i = 0; i < this.numberOfCities; i++) {
                    datasets.push({
                        label: lastWeatherHistory[i].name,
                        data: [],
                        borderColor: this.dynamicChartColor(),
                        fill: false,
                    });
                }
                this.chart = new Chart('weatherChart', {
                    type: 'line',
                    data: {labels, datasets },
                });
                const weatherToAdd = this.weatherHistory.length > 10 ?
                this.weatherHistory.slice(this.weatherHistory.length - 10)
                : this.weatherHistory.slice(0);
                for (const weather of weatherToAdd) {
                    this.addInfoToChart(weather);
                }
                this.chart.update();
            } else {
                this.addInfoToChart(lastWeatherHistory);
                this.chart.update();
            }
        }
    }

    private addInfoToChart(weatherElement: CityWeather[]){
        for (let i = 0; i < this.numberOfCities; i++) {
            if (this.chart.data.datasets[i].data.length === 10) {
                this.chart.data.datasets[i].data.shift();
            }
            this.chart.data.datasets[i].data.push(weatherElement[i].main.temp);
        }
        if (this.chart.data.labels.length < 10) {
            this.chart.data.labels.unshift(this.labelsChartArray[this.chart.data.labels.length]);
        }
    }

    private crateLabelsArray(): string[] {
        const labelsArray = [];
        for (let i = 9; i > 0; i--) {
            labelsArray.unshift((i * 3) + 'min. ago');
        }
        labelsArray.unshift('Current');
        return labelsArray;
    }

    private dynamicChartColor(){
        return 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
    }

    ngOnDestroy(): void {
        if (this.historyStoreSubscription) {
            this.historyStoreSubscription.unsubscribe();
        }
    }
}
