import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
    title = 'weather-app';

    ngOnInit(): void {
        
    }
}
