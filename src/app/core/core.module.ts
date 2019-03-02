import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { ConfigService } from './services/config.service';


@NgModule({
    imports: [ HttpClientModule ],
})
export class CoreModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [HttpService, ConfigService]
        };
    }
}