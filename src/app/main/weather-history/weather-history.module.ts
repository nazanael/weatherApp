import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherHistoryComponent } from './weather-history.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
    {
        path: '', component: WeatherHistoryComponent
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    declarations: [WeatherHistoryComponent],
    exports: [RouterModule]
})
export class WeatherHistoryModule {
}
