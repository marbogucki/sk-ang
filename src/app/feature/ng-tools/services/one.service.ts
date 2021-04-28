import { Injectable } from '@angular/core';
import { BooksService } from './books.service.abstract';

@Injectable({
  providedIn: 'root',
})
export class BooksApiService implements BooksService {
  constructor() {}

  getData(): string {
    return 'One Service';
  }
}
