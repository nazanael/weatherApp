import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class WeatherErrorHandler extends ErrorHandler {
    handleError(error) {
        if (error instanceof HttpErrorResponse) {
            alert('Backend communication error');
            console.error('Weather backend status code: ', error.status);
            console.error(error.message);
        } else {
            alert('Application error. Please contact administrator');
            console.log(error);
        }
        super.handleError(error);
      }
}
