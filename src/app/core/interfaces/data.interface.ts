import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { Reader } from 'src/app/models/reader';

export interface Data {
  getAllReaders(): Reader[];
  getAllBooks(): Observable<Book[]>;
  setPopularBook(book: Book): void;
  getPopularBook(): Book;
}
