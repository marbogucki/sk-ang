import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public post<T>(url: string, body: T): Observable<T> {
    return this.http.post<T>(url, body).pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
  }

  public get<T>(url: string): Observable<T> {
    return this.http.get<T>(url).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  public put<T>(url: string, body: T): Observable<T> {
    return this.http.put<T>(url, body).pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
  }

  public delete(url: string): Observable<void> {
    return this.http.delete<void>(url).pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error) {
      console.error('Body:', error.error);
    }
    return throwError(error.message);
  }
}
