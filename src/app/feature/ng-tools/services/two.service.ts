import { Injectable } from '@angular/core';
import { BooksService } from './books.service.abstract';

@Injectable()
export class BookMockService implements BooksService {
  constructor() {}

  getData(): string {
    return 'Two Service';
  }
}
