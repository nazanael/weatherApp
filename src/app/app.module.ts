import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {weather} from './shared/stores/weather-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { WeatherService } from './shared/services/weather-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    StoreModule.forRoot({weather})
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
