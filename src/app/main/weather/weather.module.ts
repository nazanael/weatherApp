import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { WeatherItemComponent } from './weather-item.component';

const routes: Routes = [
    {
        path: '', component: WeatherComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule],
    declarations: [WeatherComponent, WeatherItemComponent],
    exports: [RouterModule]
})
export class WeatherModule {
}
