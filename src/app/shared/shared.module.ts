import { NgModule, ModuleWithProviders } from '@angular/core';
import { WeatherService } from './services/weather-service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [ HttpClientModule ],
})
export class SharedModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [WeatherService]
        };
    }
}