import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from 'src/app/models/book';
import { Reader } from 'src/app/models/reader';
import { Data } from '../interfaces/data.interface';

@Injectable()
export class InfoService implements Data {
  book: Book = {
    bookId: 7,
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
        bookId: 1,
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
