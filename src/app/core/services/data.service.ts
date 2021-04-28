import { Injectable } from '@angular/core';
import { allReaders } from 'src/app/data/readers';
import { Book } from 'src/app/models/book';
import { Reader } from 'src/app/models/reader';
import { BookService } from '../models/book.service';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class DataService implements BookService {
  private mostPopularBook: Book = null;

  constructor(private httpService: HttpService) {}

  getAllReaders(): Reader[] {
    return allReaders;
  }

  gettReaderById(id: number): Reader {
    return allReaders.find((reader) => reader.readerId === id);
  }

  getAllBooks(): Observable<Book[]> {
    return this.httpService.get<Book[]>(`${environment.apiUrl}/todos`);
  }

  getBookById(bookId: number): Observable<Book> {
    return this.httpService.get<Book>(`${environment.apiUrl}/todos/${bookId}`);
  }

  addBook(): Observable<Omit<Book, 'id'>> {
    return this.httpService.post(`${environment.apiUrl}/todos`, {
      title: 'test',
      author: 'Janek',
      publicationYear: 2000,
    });
  }

  updateBook(bookId: number): Observable<Partial<Book>> {
    return this.httpService.put(`${environment.apiUrl}/todos/${bookId}`, {
      title: 'test',
    });
  }

  removeBook(bookId: number): Observable<void> {
    return this.httpService.delete(`${environment.apiUrl}/todos/${bookId}`);
  }

  setPopularBook(book: Book): void {
    this.mostPopularBook = book;
  }

  getPopularBook(): Book {
    return this.mostPopularBook;
  }
}
