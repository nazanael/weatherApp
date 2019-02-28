import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherHistoryComponent } from './weather-history.component';

const routes: Routes = [
    {
        path: '', component: WeatherHistoryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [WeatherHistoryComponent],
    exports: [RouterModule]
})
export class WeatherHistoryModule {
}
