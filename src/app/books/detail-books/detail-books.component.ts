import { Component } from '@angular/core';
import { Book } from '../books.model';
import { BooksService } from '../books.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-detail-books',
  imports: [RouterLink, NgIf],
  templateUrl: './detail-books.component.html',
  styleUrl: './detail-books.component.css'
})
export class DetailBooksComponent {
  book?: Book;
  books: Book[] = [];

  constructor(
    private bookService: BooksService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ){console.log('DetailBooksComponent loaded');}

  ngOnInit() {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      this.book = this.bookService.getBookById(Number(bookId));
    }
  }

  get isLibrarian() {
    return this.authService.isLibrarian();
  }

  deleteBook(id: number){
    this.bookService.deleteBook(id);
    this.router.navigate(['']);
  }

  checkoutBook(id: number) {
    this.bookService.changeCheckoutBook(id, true);
    alert('Book successfully added to the cart!');
    this.book = { ...this.book!, checkoutBook: true };
  }
}
