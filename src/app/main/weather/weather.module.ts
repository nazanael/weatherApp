import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather.component';

const routes: Routes = [
    {
        path: '', component: WeatherComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [WeatherComponent],
    exports: [RouterModule]
})
export class WeatherModule {
}
