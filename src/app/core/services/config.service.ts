import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AppConfig } from '../models/app-config';

@Injectable()
export class ConfigService {

    public static Configuration: AppConfig;
    private CONFIG_URL = 'assets/config.json';

    constructor(private httpClient: HttpClient) {}

    public getConfiguration() {
        const subject = new Subject();
        this.httpClient.get<AppConfig>(this.CONFIG_URL).subscribe(
            (data: AppConfig) => {
                ConfigService.Configuration = data;
                console.log('configuration loaded');
                subject.next(true);
                subject.complete();
            },
            (err: any) => {
                alert('Error loading configuration');
                subject.error(err);
            }
        );
        return subject;
    }
}
