import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {

    constructor(private httpClient: HttpClient) {}

    public callGetHttp<T>(url: string): Observable<any> {
        return this.httpClient.get<T>(url);
    }
}
