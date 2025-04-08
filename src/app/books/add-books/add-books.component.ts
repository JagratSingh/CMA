import { Component } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-books',
  imports: [ReactiveFormsModule],
  templateUrl: './add-books.component.html',
  styleUrl: './add-books.component.css'
})
export class AddBooksComponent {
  constructor(private bookService: BooksService, private router: Router) {}

  newBookFormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    ISBN: new FormControl('', Validators.required),
    available: new FormControl(true||false, Validators.required),
  })

  onSubmit() {
    if (
      this.newBookFormGroup.invalid ||
      this.newBookFormGroup.value.title === '' ||
      this.newBookFormGroup.value.author === '' ||
      this.newBookFormGroup.value.ISBN === ''
    ) {
      return;
    }
    this.bookService.addBooks({
      title: this.newBookFormGroup.value.title!,
      author: this.newBookFormGroup.value.author!,
      ISBN: this.newBookFormGroup.value.ISBN!,
      available: this.newBookFormGroup.value.available!,
    });

    this.newBookFormGroup.reset();
    this.router.navigate([''], { replaceUrl: true });
  }

  onCancel() {
    this.router.navigate(['']);
  }
}
