import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpMockService {
  constructor(private http: HttpClient) {}

  get(url: string): Observable<unknown> {
    return this.http.get(url);
  }
}
