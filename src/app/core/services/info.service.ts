import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from 'src/app/models/book';
import { Reader } from 'src/app/models/reader';
import { BookService } from '../models/book.service';

@Injectable()
export class InfoService implements BookService {
  book: Book = {
    id: 7,
    title: 'popular book',
    author: 'unknown',
    publicationYear: 2020,
  };

  getAllReaders(): Reader[] {
    return [
      {
        readerId: 2,
        name: 'Marek',
        weeklyReadingGoal: 1,
        totalMinutesReading: 5,
      },
    ];
  }

  getAllBooks(): Observable<Book[]> {
    return of([
      {
        id: 1,
        title: 'Lorem ipsum',
        author: 'name',
        publicationYear: 1900,
      },
    ]);
  }

  setPopularBook(book: Book): void {
    this.book = book;
  }

  getPopularBook(): Book {
    return this.book;
  }
}
