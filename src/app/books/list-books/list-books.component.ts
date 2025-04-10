import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { Book } from '../books.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-list-books',
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './list-books.component.html',
  standalone: true,
  styleUrl: './list-books.component.css'
})
export class ListBooksComponent {
  books: Book[] = [];

  constructor(private bookService: BooksService) {}

  ngOnInit(): void {
    this.books = this.bookService.getAllBooks();
  }
}
