import { Component } from '@angular/core';
import { Book } from '../books.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-edit-books',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.css', '../add-books/add-books.component.css']
})
export class EditBooksComponent {
  book: Book | null | undefined;
  editFormGroup!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private BookService: BooksService,
  ) {}

  ngOnInit() {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      this.book = this.BookService.getBookById(Number(bookId));
    } else {
      this.router.navigate(['/recipes']);
    }

    const editFormGroup = new FormGroup({
      id: new FormControl(this.book?.id),
      title: new FormControl(this.book?.title, Validators.required),
      author: new FormControl(this.book?.author),
      ISBN: new FormControl(this.book?.ISBN),
      available: new FormControl(this.book?.available),
  });
    this.editFormGroup = editFormGroup;
  }
  onSubmit() {
    this.BookService.updateBook({
      id: this.book!.id,
      title: this.editFormGroup.value.title,
      author: this.editFormGroup.value.author,
      ISBN: this.editFormGroup.value.ISBN,
      available: this.editFormGroup.value.available,
    });

    this.router.navigate(['book', this.book!.id]);
  }

  onCancel() {
    if(this.book){
      this.router.navigate(['book', this.book!.id]);
    } else {
      this.router.navigate(['']);
    }
  }
}
