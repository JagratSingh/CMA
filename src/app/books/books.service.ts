import { Injectable } from "@angular/core";
import books_data from "./books.data";
import { Book } from "./books.model";

@Injectable({
    providedIn: 'root'
})

export class BooksService {
    books = books_data;
    myBooks: Book[] = [];

    saveBooksToLocalStorage() {
        localStorage.setItem('books', JSON.stringify(this.books));
    }

    getBooksFromLocalStorage() {
        const storedBooks = localStorage.getItem('books');
        return storedBooks ? JSON.parse(storedBooks) : null;
    }

    addBooks(book: Omit<Book, 'id'>) {
        const id = Math.floor(Math.random() * 1000000);
        this.books.push({ ...book, id });
        this.saveBooksToLocalStorage();
    }

    getAllBooks(): Book[] {
        this.books = this.getBooksFromLocalStorage() || books_data;
        return this.books;
    }

    deleteBook(bookId: number) {
        this.books = this.getBooksFromLocalStorage() || books_data;
        this.books = this.books.filter((b) => b.id !== bookId);
        this.saveBooksToLocalStorage();
    }

    getBookById(bookId: number): Book | undefined {
        this.books = this.getBooksFromLocalStorage() || books_data;
        return this.books.find((b) => b.id === bookId);
    }

    updateBook(book: Book) {
        this.books = this.getBooksFromLocalStorage() || books_data;
        this.books = this.books.map((r) => (r.id === book.id ? book : r));
        this.saveBooksToLocalStorage();
    }

    checkAvailability(bookId: number): boolean {
        this.books = this.getBooksFromLocalStorage() || books_data;
        const book = this.books.find((b) => b.id === bookId);
        return book ? book.available : false;
    }

    changeAvailability(bookId: number, available: boolean) {
        this.books = this.getBooksFromLocalStorage() || books_data;
        this.books = this.books.map((b) => (b.id === bookId ? { ...b, available } : b));
        this.saveBooksToLocalStorage();
    }
}
