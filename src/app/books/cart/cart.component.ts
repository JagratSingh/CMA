import { Component } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../books.model';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [NgIf, NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  books: Book[] = [];

  constructor(private bookService:BooksService){}

  ngOnInit(){
    this.books = this.bookService.getAllBooks();
    return this.books;
  }

  changeCheckoutBook(id: number) {
    this.bookService.changeCheckoutBook(id, false);
    alert('Book successfully removed from the cart!');
    this.books = this.bookService.getAllBooks();
  }
}
