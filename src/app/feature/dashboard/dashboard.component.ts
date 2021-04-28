import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/core/models/book.service';
import { Book } from 'src/app/models/book';
import { Reader } from 'src/app/models/reader';

@Component({
  selector: 'sbapp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  allReaders: Reader[] = null;
  books: Book[] = null;
  popularBook: Book = null;

  constructor(private dataService: BookService) {}

  ngOnInit(): void {
    this.allReaders = this.dataService.getAllReaders();
    this.dataService.getAllBooks().subscribe(
      (books: Book[]) => (this.books = books),
      (error) => console.log('test', error)
    );
    this.popularBook = this.dataService.getPopularBook();
  }

  setPopularBook(book: Book): void {
    this.dataService.setPopularBook(book);
    this.popularBook = this.dataService.getPopularBook();
  }
}
