import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { Reader } from 'src/app/models/reader';
export abstract class BookService {
  abstract getAllReaders(): Reader[];
  abstract getAllBooks(): Observable<Book[]>;
  abstract setPopularBook(book: Book): void;
  abstract getPopularBook(): Book;
}
