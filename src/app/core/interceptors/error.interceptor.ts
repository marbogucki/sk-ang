import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry(3),
      catchError((error: HttpErrorResponse) => {
        const errors = {
          ...error,
          errorMessage: undefined,
        };

        errors.errorMessage =
          error.error instanceof ErrorEvent
            ? `An error occurred:, ${error.error.message}`
            : `Backend returned code ${error.status}\nMessage: ${error.message}`;

        errors.message = 'Something bad happened; please try again later.';

        console.error('errors', errors);

        return throwError(errors);
      })
    );
  }
}
