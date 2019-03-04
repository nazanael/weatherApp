import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, ErrorHandler } from '@angular/core';
import {StoreModule} from '@ngrx/store';
import { weather, currentWeather } from './shared/stores/weather-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { WeatherService } from './shared/services/weather-service';
import { CoreModule } from './core/core.module';
import { ConfigService } from './core/services/config.service';
import { WeatherErrorHandler } from './shared/handler/weather-error.handler';

export function initializeConfiguration(configService: ConfigService) {
  return () => configService.getConfiguration();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    StoreModule.forRoot({weather, currentWeather})
  ],
  providers: [
    { provide: APP_INITIALIZER,
      useFactory: initializeConfiguration,
      deps: [ConfigService], multi: true },
      {provide: ErrorHandler, useClass: WeatherErrorHandler},
      WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
